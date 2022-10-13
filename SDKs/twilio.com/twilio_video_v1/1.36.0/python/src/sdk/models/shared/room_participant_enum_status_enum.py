from dataclasses import dataclass, field
from typing import Enum

class RoomParticipantEnumStatusEnum(str, Enum):
    CONNECTED = "connected"
    DISCONNECTED = "disconnected"

