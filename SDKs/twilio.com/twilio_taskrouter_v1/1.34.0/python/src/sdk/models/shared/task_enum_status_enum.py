from dataclasses import dataclass, field
from typing import Enum

class TaskEnumStatusEnum(str, Enum):
    PENDING = "pending"
    RESERVED = "reserved"
    ASSIGNED = "assigned"
    CANCELED = "canceled"
    COMPLETED = "completed"
    WRAPPING = "wrapping"

