from dataclasses import dataclass, field
from typing import Enum

class InteractionChannelParticipantEnumStatusEnum(str, Enum):
    CLOSED = "closed"
    WRAPUP = "wrapup"

