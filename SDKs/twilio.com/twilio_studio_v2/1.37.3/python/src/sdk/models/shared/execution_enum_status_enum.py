from dataclasses import dataclass, field
from enum import Enum

class ExecutionEnumStatusEnum(str, Enum):
    ACTIVE = "active"
    ENDED = "ended"

