from dataclasses import dataclass, field
from enum import Enum

class CallSummariesEnumAnsweredByEnum(str, Enum):
    UNKNOWN = "unknown"
    MACHINE_START = "machine_start"
    MACHINE_END_BEEP = "machine_end_beep"
    MACHINE_END_SILENCE = "machine_end_silence"
    MACHINE_END_OTHER = "machine_end_other"
    HUMAN = "human"
    FAX = "fax"

