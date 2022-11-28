from dataclasses import dataclass, field
from enum import Enum

class BuildStatusEnumStatusEnum(str, Enum):
    BUILDING = "building"
    COMPLETED = "completed"
    FAILED = "failed"

