from dataclasses import dataclass, field
from typing import Enum

class PlayerStreamerEnumStatusEnum(str, Enum):
    CREATED = "created"
    STARTED = "started"
    ENDED = "ended"
    FAILED = "failed"

