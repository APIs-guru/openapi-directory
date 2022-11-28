from dataclasses import dataclass, field
from enum import Enum

class WatchlistStatusEnum(str, Enum):
    NONE = "NONE"
    PENDING = "PENDING"
    REVIEW = "REVIEW"
    PASSED = "PASSED"
    FAILED = "FAILED"

