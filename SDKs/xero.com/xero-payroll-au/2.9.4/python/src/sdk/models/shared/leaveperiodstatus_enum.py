from dataclasses import dataclass, field
from typing import Enum

class LeavePeriodStatusEnum(str, Enum):
    SCHEDULED = "SCHEDULED"
    PROCESSED = "PROCESSED"

