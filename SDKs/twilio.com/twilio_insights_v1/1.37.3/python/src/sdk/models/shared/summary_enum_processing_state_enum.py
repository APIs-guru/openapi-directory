from dataclasses import dataclass, field
from enum import Enum

class SummaryEnumProcessingStateEnum(str, Enum):
    COMPLETE = "complete"
    PARTIAL = "partial"

