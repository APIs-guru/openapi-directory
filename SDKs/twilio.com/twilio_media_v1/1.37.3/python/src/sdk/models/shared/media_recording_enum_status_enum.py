from dataclasses import dataclass, field
from enum import Enum

class MediaRecordingEnumStatusEnum(str, Enum):
    PROCESSING = "processing"
    COMPLETED = "completed"
    DELETED = "deleted"
    FAILED = "failed"

