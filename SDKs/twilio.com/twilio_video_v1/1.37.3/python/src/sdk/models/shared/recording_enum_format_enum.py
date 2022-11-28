from dataclasses import dataclass, field
from enum import Enum

class RecordingEnumFormatEnum(str, Enum):
    MKA = "mka"
    MKV = "mkv"

