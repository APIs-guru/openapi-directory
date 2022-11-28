from dataclasses import dataclass, field
from enum import Enum

class SimEnumStatusEnum(str, Enum):
    NEW = "new"
    READY = "ready"
    ACTIVE = "active"
    SUSPENDED = "suspended"
    DEACTIVATED = "deactivated"
    CANCELED = "canceled"
    SCHEDULED = "scheduled"
    UPDATING = "updating"

