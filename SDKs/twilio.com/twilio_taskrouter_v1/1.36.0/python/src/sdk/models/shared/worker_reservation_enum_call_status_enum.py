from dataclasses import dataclass, field
from typing import Enum

class WorkerReservationEnumCallStatusEnum(str, Enum):
    INITIATED = "initiated"
    RINGING = "ringing"
    ANSWERED = "answered"
    COMPLETED = "completed"

