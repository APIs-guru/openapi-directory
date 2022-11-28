from dataclasses import dataclass, field
from enum import Enum

class UserConversationEnumStateEnum(str, Enum):
    INACTIVE = "inactive"
    ACTIVE = "active"
    CLOSED = "closed"

