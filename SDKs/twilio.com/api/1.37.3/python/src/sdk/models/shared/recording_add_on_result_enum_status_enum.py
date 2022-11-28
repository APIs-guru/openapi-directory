from dataclasses import dataclass, field
from enum import Enum

class RecordingAddOnResultEnumStatusEnum(str, Enum):
    CANCELED = "canceled"
    COMPLETED = "completed"
    DELETED = "deleted"
    FAILED = "failed"
    IN_PROGRESS = "in-progress"
    INIT = "init"
    PROCESSING = "processing"
    QUEUED = "queued"

