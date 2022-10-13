from dataclasses import dataclass, field
from typing import Enum

class RoomParticipantSubscribedTrackEnumKindEnum(str, Enum):
    AUDIO = "audio"
    VIDEO = "video"
    DATA = "data"

