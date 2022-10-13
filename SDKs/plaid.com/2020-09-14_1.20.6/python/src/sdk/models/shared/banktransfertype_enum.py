from dataclasses import dataclass, field
from typing import Enum

class BankTransferTypeEnum(str, Enum):
    DEBIT = "debit"
    CREDIT = "credit"

