from dataclasses import dataclass, field
from typing import Enum

class CallSummariesEnumProcessingStateRequestEnum(str, Enum):
    COMPLETED = "completed"
    STARTED = "started"
    PARTIAL = "partial"
    ALL = "all"

