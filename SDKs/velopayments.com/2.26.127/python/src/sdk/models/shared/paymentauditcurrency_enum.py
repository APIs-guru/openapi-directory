from dataclasses import dataclass, field
from enum import Enum

class PaymentAuditCurrencyEnum(str, Enum):
    USD = "USD"
    GBP = "GBP"
    EUR = "EUR"

