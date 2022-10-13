from dataclasses import dataclass, field
from typing import Enum

class BuildStatusEnumStatusEnum(str, Enum):
    BUILDING = "building"
    COMPLETED = "completed"
    FAILED = "failed"

