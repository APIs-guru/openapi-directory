from dataclasses import dataclass, field
from typing import Enum

class ServiceParticipantConversationEnumStateEnum(str, Enum):
    INACTIVE = "inactive"
    ACTIVE = "active"
    CLOSED = "closed"

