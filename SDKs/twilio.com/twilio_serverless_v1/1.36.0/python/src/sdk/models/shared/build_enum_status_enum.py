from dataclasses import dataclass, field
from typing import Enum

class BuildEnumStatusEnum(str, Enum):
    BUILDING = "building"
    COMPLETED = "completed"
    FAILED = "failed"

