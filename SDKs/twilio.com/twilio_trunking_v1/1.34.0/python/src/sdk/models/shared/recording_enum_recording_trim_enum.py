from dataclasses import dataclass, field
from typing import Enum

class RecordingEnumRecordingTrimEnum(str, Enum):
    TRIM_SILENCE = "trim-silence"
    DO_NOT_TRIM = "do-not-trim"

