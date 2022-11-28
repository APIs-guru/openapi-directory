from dataclasses import dataclass, field
from enum import Enum

class ChallengeEnumChallengeStatusesEnum(str, Enum):
    PENDING = "pending"
    EXPIRED = "expired"
    APPROVED = "approved"
    DENIED = "denied"

