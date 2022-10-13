from dataclasses import dataclass, field
from typing import Enum

class SimEnumStatusUpdateEnum(str, Enum):
    READY = "ready"
    ACTIVE = "active"
    INACTIVE = "inactive"

