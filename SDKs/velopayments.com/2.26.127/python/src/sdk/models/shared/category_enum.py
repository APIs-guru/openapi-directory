from dataclasses import dataclass, field
from typing import Enum

class CategoryEnum(str, Enum):
    PAYMENT = "payment"
    PAYEE = "payee"
    DEBIT = "debit"

