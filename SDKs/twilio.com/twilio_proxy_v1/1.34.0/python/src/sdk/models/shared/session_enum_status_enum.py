from dataclasses import dataclass, field
from typing import Enum

class SessionEnumStatusEnum(str, Enum):
    OPEN = "open"
    IN_PROGRESS = "in-progress"
    CLOSED = "closed"
    FAILED = "failed"
    UNKNOWN = "unknown"

