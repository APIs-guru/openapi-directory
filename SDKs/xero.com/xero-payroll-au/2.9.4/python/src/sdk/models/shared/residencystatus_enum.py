from dataclasses import dataclass, field
from typing import Enum

class ResidencyStatusEnum(str, Enum):
    AUSTRALIANRESIDENT = "AUSTRALIANRESIDENT"
    FOREIGNRESIDENT = "FOREIGNRESIDENT"
    WORKINGHOLIDAYMAKER = "WORKINGHOLIDAYMAKER"

