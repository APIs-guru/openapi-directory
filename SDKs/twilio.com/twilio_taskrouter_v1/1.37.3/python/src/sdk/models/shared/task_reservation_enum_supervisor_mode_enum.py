from dataclasses import dataclass, field
from enum import Enum

class TaskReservationEnumSupervisorModeEnum(str, Enum):
    MONITOR = "monitor"
    WHISPER = "whisper"
    BARGE = "barge"

