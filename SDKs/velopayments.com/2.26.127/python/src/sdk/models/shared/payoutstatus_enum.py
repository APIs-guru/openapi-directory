from dataclasses import dataclass, field
from typing import Enum

class PayoutStatusEnum(str, Enum):
    ACCEPTED = "ACCEPTED"
    REJECTED = "REJECTED"
    SUBMITTED = "SUBMITTED"
    QUOTED = "QUOTED"
    INSTRUCTED = "INSTRUCTED"
    COMPLETED = "COMPLETED"
    INCOMPLETE = "INCOMPLETE"
    CONFIRMED = "CONFIRMED"
    WITHDRAWN = "WITHDRAWN"

