from dataclasses import dataclass, field
from enum import Enum

class PaymentRailsEnum(str, Enum):
    WU = "WU"
    BOFA = "BOFA"

