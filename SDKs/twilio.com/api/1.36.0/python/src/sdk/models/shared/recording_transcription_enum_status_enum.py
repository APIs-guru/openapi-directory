from dataclasses import dataclass, field
from typing import Enum

class RecordingTranscriptionEnumStatusEnum(str, Enum):
    IN_PROGRESS = "in-progress"
    COMPLETED = "completed"
    FAILED = "failed"

