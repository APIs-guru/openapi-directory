from dataclasses import dataclass, field
from typing import Enum

class ConversationEnumStateEnum(str, Enum):
    INACTIVE = "inactive"
    ACTIVE = "active"
    CLOSED = "closed"

