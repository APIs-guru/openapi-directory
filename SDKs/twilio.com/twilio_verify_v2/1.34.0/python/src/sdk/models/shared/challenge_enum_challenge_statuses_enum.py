from dataclasses import dataclass, field
from typing import Enum

class ChallengeEnumChallengeStatusesEnum(str, Enum):
    PENDING = "pending"
    EXPIRED = "expired"
    APPROVED = "approved"
    DENIED = "denied"

