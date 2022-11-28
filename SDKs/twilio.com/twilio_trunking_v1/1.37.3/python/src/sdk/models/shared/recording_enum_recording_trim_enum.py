from dataclasses import dataclass, field
from enum import Enum

class RecordingEnumRecordingTrimEnum(str, Enum):
    TRIM_SILENCE = "trim-silence"
    DO_NOT_TRIM = "do-not-trim"

