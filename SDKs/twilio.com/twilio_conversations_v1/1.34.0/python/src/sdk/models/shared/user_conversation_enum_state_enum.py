from dataclasses import dataclass, field
from typing import Enum

class UserConversationEnumStateEnum(str, Enum):
    INACTIVE = "inactive"
    ACTIVE = "active"
    CLOSED = "closed"

