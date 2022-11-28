from dataclasses import dataclass, field
from enum import Enum

class PaymentsEnumPaymentMethodEnum(str, Enum):
    CREDIT_CARD = "credit-card"
    ACH_DEBIT = "ach-debit"

