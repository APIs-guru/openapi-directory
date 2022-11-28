from dataclasses import dataclass, field
from enum import Enum

class ServiceUserConversationEnumStateEnum(str, Enum):
    INACTIVE = "inactive"
    ACTIVE = "active"
    CLOSED = "closed"

