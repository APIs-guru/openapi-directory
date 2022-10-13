from dataclasses import dataclass, field
from typing import Enum

class CallFeedbackSummaryEnumStatusEnum(str, Enum):
    QUEUED = "queued"
    IN_PROGRESS = "in-progress"
    COMPLETED = "completed"
    FAILED = "failed"

