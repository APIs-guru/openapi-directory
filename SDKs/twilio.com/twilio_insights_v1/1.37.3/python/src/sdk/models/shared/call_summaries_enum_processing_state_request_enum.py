from dataclasses import dataclass, field
from enum import Enum

class CallSummariesEnumProcessingStateRequestEnum(str, Enum):
    COMPLETED = "completed"
    STARTED = "started"
    PARTIAL = "partial"
    ALL = "all"

