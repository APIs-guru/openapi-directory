from dataclasses import dataclass, field
from typing import Enum

class RecordingEnumTypeEnum(str, Enum):
    AUDIO = "audio"
    VIDEO = "video"
    DATA = "data"

