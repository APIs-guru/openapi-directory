from dataclasses import dataclass, field
from enum import Enum

class RecordingTranscriptionEnumStatusEnum(str, Enum):
    IN_PROGRESS = "in-progress"
    COMPLETED = "completed"
    FAILED = "failed"

