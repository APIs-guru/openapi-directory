from dataclasses import dataclass, field
from enum import Enum

class WorkerReservationEnumStatusEnum(str, Enum):
    PENDING = "pending"
    ACCEPTED = "accepted"
    REJECTED = "rejected"
    TIMEOUT = "timeout"
    CANCELED = "canceled"
    RESCINDED = "rescinded"
    WRAPPING = "wrapping"
    COMPLETED = "completed"

