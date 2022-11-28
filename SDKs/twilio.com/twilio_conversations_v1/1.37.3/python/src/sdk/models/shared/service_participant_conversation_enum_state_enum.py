from dataclasses import dataclass, field
from enum import Enum

class ServiceParticipantConversationEnumStateEnum(str, Enum):
    INACTIVE = "inactive"
    ACTIVE = "active"
    CLOSED = "closed"

