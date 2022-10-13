from dataclasses import dataclass, field
from typing import Enum

class InteractionChannelEnumChannelStatusEnum(str, Enum):
    SETUP = "setup"
    ACTIVE = "active"
    FAILED = "failed"
    CLOSED = "closed"

