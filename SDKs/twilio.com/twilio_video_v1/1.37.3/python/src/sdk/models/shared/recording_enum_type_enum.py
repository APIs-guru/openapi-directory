from dataclasses import dataclass, field
from enum import Enum

class RecordingEnumTypeEnum(str, Enum):
    AUDIO = "audio"
    VIDEO = "video"
    DATA = "data"

