from dataclasses import dataclass, field
from enum import Enum

class CallSummariesEnumProcessingStateEnum(str, Enum):
    COMPLETE = "complete"
    PARTIAL = "partial"

