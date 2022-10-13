from dataclasses import dataclass, field
from typing import Enum

class AllowanceTypeEnum(str, Enum):
    CAR = "CAR"
    TRANSPORT = "TRANSPORT"
    TRAVEL = "TRAVEL"
    LAUNDRY = "LAUNDRY"
    MEALS = "MEALS"
    JOBKEEPER = "JOBKEEPER"
    OTHER = "OTHER"

