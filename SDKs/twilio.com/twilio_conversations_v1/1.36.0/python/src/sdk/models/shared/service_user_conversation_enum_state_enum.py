from dataclasses import dataclass, field
from typing import Enum

class ServiceUserConversationEnumStateEnum(str, Enum):
    INACTIVE = "inactive"
    ACTIVE = "active"
    CLOSED = "closed"

