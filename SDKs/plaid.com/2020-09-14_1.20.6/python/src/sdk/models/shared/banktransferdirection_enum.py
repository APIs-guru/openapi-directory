from dataclasses import dataclass, field
from typing import Enum

class BankTransferDirectionEnum(str, Enum):
    OUTBOUND = "outbound"
    INBOUND = "inbound"

