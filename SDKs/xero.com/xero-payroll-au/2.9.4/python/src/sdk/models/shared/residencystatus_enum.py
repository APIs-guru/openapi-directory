from dataclasses import dataclass, field
from enum import Enum

class ResidencyStatusEnum(str, Enum):
    AUSTRALIANRESIDENT = "AUSTRALIANRESIDENT"
    FOREIGNRESIDENT = "FOREIGNRESIDENT"
    WORKINGHOLIDAYMAKER = "WORKINGHOLIDAYMAKER"

