from dataclasses import dataclass, field
from typing import Enum

class CompositionEnumStatusEnum(str, Enum):
    ENQUEUED = "enqueued"
    PROCESSING = "processing"
    COMPLETED = "completed"
    DELETED = "deleted"
    FAILED = "failed"

