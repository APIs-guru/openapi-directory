from dataclasses import dataclass, field
from typing import Enum

class PaymentAuditCurrencyEnum(str, Enum):
    USD = "USD"
    GBP = "GBP"
    EUR = "EUR"

