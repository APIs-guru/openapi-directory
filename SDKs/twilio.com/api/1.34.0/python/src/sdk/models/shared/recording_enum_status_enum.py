from dataclasses import dataclass, field
from typing import Enum

class RecordingEnumStatusEnum(str, Enum):
    IN_PROGRESS = "in-progress"
    PAUSED = "paused"
    STOPPED = "stopped"
    PROCESSING = "processing"
    COMPLETED = "completed"
    ABSENT = "absent"
    DELETED = "deleted"

