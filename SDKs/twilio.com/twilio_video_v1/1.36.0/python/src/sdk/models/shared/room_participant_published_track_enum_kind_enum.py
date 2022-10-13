from dataclasses import dataclass, field
from typing import Enum

class RoomParticipantPublishedTrackEnumKindEnum(str, Enum):
    AUDIO = "audio"
    VIDEO = "video"
    DATA = "data"

