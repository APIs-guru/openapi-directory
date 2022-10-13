from dataclasses import dataclass, field
from typing import Enum

class RoomRecordingEnumTypeEnum(str, Enum):
    AUDIO = "audio"
    VIDEO = "video"
    DATA = "data"

