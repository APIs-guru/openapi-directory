from dataclasses import dataclass, field
from enum import Enum

class OfacStatusEnum(str, Enum):
    PENDING = "PENDING"
    PASSED = "PASSED"
    FAILED = "FAILED"

