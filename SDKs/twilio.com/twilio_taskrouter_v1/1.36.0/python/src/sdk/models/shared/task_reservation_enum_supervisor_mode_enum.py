from dataclasses import dataclass, field
from typing import Enum

class TaskReservationEnumSupervisorModeEnum(str, Enum):
    MONITOR = "monitor"
    WHISPER = "whisper"
    BARGE = "barge"

