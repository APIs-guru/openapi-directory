from dataclasses import dataclass, field
from enum import Enum

class ConferenceEnumProcessingStateEnum(str, Enum):
    COMPLETE = "complete"
    IN_PROGRESS = "in_progress"
    TIMEOUT = "timeout"

