from dataclasses import dataclass, field
from enum import Enum

class CreditDebitIndicatorEnum(str, Enum):
    CREDIT = "CREDIT"
    DEBIT = "DEBIT"

