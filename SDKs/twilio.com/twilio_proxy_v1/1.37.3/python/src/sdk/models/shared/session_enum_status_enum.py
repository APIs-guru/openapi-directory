from dataclasses import dataclass, field
from enum import Enum

class SessionEnumStatusEnum(str, Enum):
    OPEN = "open"
    IN_PROGRESS = "in-progress"
    CLOSED = "closed"
    FAILED = "failed"
    UNKNOWN = "unknown"

