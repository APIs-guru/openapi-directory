from dataclasses import dataclass, field
from typing import Enum

class TaskReservationEnumStatusEnum(str, Enum):
    PENDING = "pending"
    ACCEPTED = "accepted"
    REJECTED = "rejected"
    TIMEOUT = "timeout"
    CANCELED = "canceled"
    RESCINDED = "rescinded"
    WRAPPING = "wrapping"
    COMPLETED = "completed"

