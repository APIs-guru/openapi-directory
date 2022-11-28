from dataclasses import dataclass, field
from enum import Enum

class PaymentAuditCurrencyV3Enum(str, Enum):
    USD = "USD"
    GBP = "GBP"
    EUR = "EUR"

