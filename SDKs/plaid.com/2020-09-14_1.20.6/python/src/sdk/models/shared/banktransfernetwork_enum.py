from dataclasses import dataclass, field
from enum import Enum

class BankTransferNetworkEnum(str, Enum):
    ACH = "ach"
    SAME_DAY_ACH = "same-day-ach"
    WIRE = "wire"

