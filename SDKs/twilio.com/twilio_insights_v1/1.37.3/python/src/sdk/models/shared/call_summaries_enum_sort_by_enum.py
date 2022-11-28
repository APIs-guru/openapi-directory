from dataclasses import dataclass, field
from enum import Enum

class CallSummariesEnumSortByEnum(str, Enum):
    START_TIME = "start_time"
    END_TIME = "end_time"

