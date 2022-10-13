from dataclasses import dataclass, field
from typing import Enum

class ExecutionEnumStatusEnum(str, Enum):
    ACTIVE = "active"
    ENDED = "ended"

