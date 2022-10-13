from dataclasses import dataclass, field
from typing import Enum

class RecordingEnumFormatEnum(str, Enum):
    MKA = "mka"
    MKV = "mkv"

