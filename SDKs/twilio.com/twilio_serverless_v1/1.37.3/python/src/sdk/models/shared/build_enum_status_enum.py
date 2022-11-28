from dataclasses import dataclass, field
from enum import Enum

class BuildEnumStatusEnum(str, Enum):
    BUILDING = "building"
    COMPLETED = "completed"
    FAILED = "failed"

