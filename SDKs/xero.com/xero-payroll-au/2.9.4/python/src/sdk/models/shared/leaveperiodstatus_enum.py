from dataclasses import dataclass, field
from enum import Enum

class LeavePeriodStatusEnum(str, Enum):
    SCHEDULED = "SCHEDULED"
    PROCESSED = "PROCESSED"

