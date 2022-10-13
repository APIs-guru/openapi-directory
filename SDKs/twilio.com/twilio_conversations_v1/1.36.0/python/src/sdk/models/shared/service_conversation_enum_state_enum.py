from dataclasses import dataclass, field
from typing import Enum

class ServiceConversationEnumStateEnum(str, Enum):
    INACTIVE = "inactive"
    ACTIVE = "active"
    CLOSED = "closed"

