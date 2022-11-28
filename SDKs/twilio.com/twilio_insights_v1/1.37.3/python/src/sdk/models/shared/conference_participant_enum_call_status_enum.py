from dataclasses import dataclass, field
from enum import Enum

class ConferenceParticipantEnumCallStatusEnum(str, Enum):
    ANSWERED = "answered"
    COMPLETED = "completed"
    BUSY = "busy"
    FAIL = "fail"
    NOANSWER = "noanswer"
    RINGING = "ringing"
    CANCELED = "canceled"

