from dataclasses import dataclass, field
from typing import Enum

class SimEnumStatusEnum(str, Enum):
    NEW = "new"
    READY = "ready"
    ACTIVE = "active"
    INACTIVE = "inactive"
    SCHEDULED = "scheduled"

