from dataclasses import dataclass, field
from enum import Enum

class RoomParticipantEnumStatusEnum(str, Enum):
    CONNECTED = "connected"
    DISCONNECTED = "disconnected"

