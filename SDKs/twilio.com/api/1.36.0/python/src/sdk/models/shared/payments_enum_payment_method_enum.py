from dataclasses import dataclass, field
from typing import Enum

class PaymentsEnumPaymentMethodEnum(str, Enum):
    CREDIT_CARD = "credit-card"
    ACH_DEBIT = "ach-debit"

