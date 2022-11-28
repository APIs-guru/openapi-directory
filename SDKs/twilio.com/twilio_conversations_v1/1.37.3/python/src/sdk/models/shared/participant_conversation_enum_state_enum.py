from dataclasses import dataclass, field
from enum import Enum

class ParticipantConversationEnumStateEnum(str, Enum):
    INACTIVE = "inactive"
    ACTIVE = "active"
    CLOSED = "closed"

