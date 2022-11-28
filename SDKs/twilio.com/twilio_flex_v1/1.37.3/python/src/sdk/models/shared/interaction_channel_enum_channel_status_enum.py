from dataclasses import dataclass, field
from enum import Enum

class InteractionChannelEnumChannelStatusEnum(str, Enum):
    SETUP = "setup"
    ACTIVE = "active"
    FAILED = "failed"
    CLOSED = "closed"

