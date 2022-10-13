from dataclasses import dataclass, field
from typing import Enum

class ConferenceParticipantEnumProcessingStateEnum(str, Enum):
    COMPLETE = "complete"
    IN_PROGRESS = "in_progress"
    TIMEOUT = "timeout"

