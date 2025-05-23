from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from sqlalchemy import func
from datetime import datetime

from app.database import get_db
from app.models import Transaction, User
from app.auth_module import get_current_user

router = APIRouter(prefix="/dashboard", tags=["Dashboard"])
from app.models import Transaction  # no Movement

@router.get("/")
async def get_dashboard_data(
    current_user: User = Depends(get_current_user),
    db: AsyncSession = Depends(get_db)
):
    today = datetime.utcnow()
    start = today.replace(day=1, hour=0, minute=0, second=0, microsecond=0)

    result = await db.execute(
        select(Transaction)
        .where(Transaction.user_id == current_user.id)
        .where(Transaction.date >= start)
    )
    transactions = result.scalars().all()

    ingresos = sum(t.amount for t in transactions if t.type == "income")
    egresos = sum(t.amount for t in transactions if t.type == "expense")
    saldo = ingresos - egresos

    res = await db.execute(
        select(
            func.date_trunc("day", Transaction.date).label("day"),
            Transaction.type,
            func.sum(Transaction.amount)
        )
        .where(Transaction.user_id == current_user.id)
        .group_by("day", Transaction.type)
        .order_by("day")
    )
    grouped = res.all()

    timeline = {}
    for day, tipo, total in grouped:
        d = day.strftime("%Y-%m-%d")
        if d not in timeline:
            timeline[d] = {"income": 0, "expense": 0}
        timeline[d][tipo] = total

    # serializa los movimientos para el frontend si lo necesitas
    serialized = [
        {
            "id": t.id,
            "amount": t.amount,
            "type": t.type,
            "category": t.category,
            "description": t.description,
            "date": t.date.isoformat(),
        }
        for t in transactions
    ]

    return {
        "ingresos": ingresos,
        "egresos": egresos,
        "saldo": saldo,
        "timeline": timeline,
        "transactions": serialized  # 👈 ¡Clave si los mostrarás!
    }
