from dataclasses import dataclass, field
from typing import Enum

class RecordingEnumStatusEnum(str, Enum):
    PROCESSING = "processing"
    COMPLETED = "completed"
    DELETED = "deleted"
    FAILED = "failed"

