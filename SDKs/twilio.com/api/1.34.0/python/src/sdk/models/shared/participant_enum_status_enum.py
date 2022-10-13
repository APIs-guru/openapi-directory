from dataclasses import dataclass, field
from typing import Enum

class ParticipantEnumStatusEnum(str, Enum):
    QUEUED = "queued"
    CONNECTING = "connecting"
    RINGING = "ringing"
    CONNECTED = "connected"
    COMPLETE = "complete"
    FAILED = "failed"

