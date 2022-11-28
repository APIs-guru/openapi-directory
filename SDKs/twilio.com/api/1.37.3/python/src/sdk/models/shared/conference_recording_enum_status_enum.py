from dataclasses import dataclass, field
from enum import Enum

class ConferenceRecordingEnumStatusEnum(str, Enum):
    IN_PROGRESS = "in-progress"
    PAUSED = "paused"
    STOPPED = "stopped"
    PROCESSING = "processing"
    COMPLETED = "completed"
    ABSENT = "absent"

