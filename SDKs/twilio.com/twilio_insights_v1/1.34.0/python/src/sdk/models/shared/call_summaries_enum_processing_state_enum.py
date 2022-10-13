from dataclasses import dataclass, field
from typing import Enum

class CallSummariesEnumProcessingStateEnum(str, Enum):
    COMPLETE = "complete"
    PARTIAL = "partial"

