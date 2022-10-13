from dataclasses import dataclass, field
from typing import Enum

class PaymentRailsEnum(str, Enum):
    WU = "WU"
    BOFA = "BOFA"

