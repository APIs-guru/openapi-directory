from dataclasses import dataclass, field
from typing import Enum

class SummaryEnumProcessingStateEnum(str, Enum):
    COMPLETE = "complete"
    PARTIAL = "partial"

