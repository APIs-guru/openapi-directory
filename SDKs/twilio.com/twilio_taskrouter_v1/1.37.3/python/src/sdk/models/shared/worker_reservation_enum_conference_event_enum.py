from dataclasses import dataclass, field
from enum import Enum

class WorkerReservationEnumConferenceEventEnum(str, Enum):
    START = "start"
    END = "end"
    JOIN = "join"
    LEAVE = "leave"
    MUTE = "mute"
    HOLD = "hold"
    SPEAKER = "speaker"

