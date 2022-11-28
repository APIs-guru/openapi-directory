from dataclasses import dataclass, field
from enum import Enum

class BankTransferTypeEnum(str, Enum):
    DEBIT = "debit"
    CREDIT = "credit"

