from dataclasses import dataclass, field
from enum import Enum

class WatchlistStatus2Enum(str, Enum):
    NONE = "NONE"
    PENDING = "PENDING"
    REVIEW = "REVIEW"
    PASSED = "PASSED"
    FAILED = "FAILED"

