from dataclasses import dataclass, field
from enum import Enum

class InteractionChannelParticipantEnumStatusEnum(str, Enum):
    CLOSED = "closed"
    WRAPUP = "wrapup"

