from dataclasses import dataclass, field
from enum import Enum

class EngagementEnumStatusEnum(str, Enum):
    ACTIVE = "active"
    ENDED = "ended"

