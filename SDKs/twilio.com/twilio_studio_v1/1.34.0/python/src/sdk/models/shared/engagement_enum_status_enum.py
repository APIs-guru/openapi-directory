from dataclasses import dataclass, field
from typing import Enum

class EngagementEnumStatusEnum(str, Enum):
    ACTIVE = "active"
    ENDED = "ended"

