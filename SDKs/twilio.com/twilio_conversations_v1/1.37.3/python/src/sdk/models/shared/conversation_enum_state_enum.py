from dataclasses import dataclass, field
from enum import Enum

class ConversationEnumStateEnum(str, Enum):
    INACTIVE = "inactive"
    ACTIVE = "active"
    CLOSED = "closed"

