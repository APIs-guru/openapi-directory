from dataclasses import dataclass, field
from typing import Enum

class CreditDebitIndicatorEnum(str, Enum):
    CREDIT = "CREDIT"
    DEBIT = "DEBIT"

