from dataclasses import dataclass, field
from typing import Enum

class PaymentAuditCurrencyV3Enum(str, Enum):
    USD = "USD"
    GBP = "GBP"
    EUR = "EUR"

