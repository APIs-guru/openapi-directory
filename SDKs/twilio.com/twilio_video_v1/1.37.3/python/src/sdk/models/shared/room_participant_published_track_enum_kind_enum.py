from dataclasses import dataclass, field
from enum import Enum

class RoomParticipantPublishedTrackEnumKindEnum(str, Enum):
    AUDIO = "audio"
    VIDEO = "video"
    DATA = "data"

