from dataclasses import dataclass, field
from enum import Enum

class BankTransferDirectionEnum(str, Enum):
    OUTBOUND = "outbound"
    INBOUND = "inbound"

