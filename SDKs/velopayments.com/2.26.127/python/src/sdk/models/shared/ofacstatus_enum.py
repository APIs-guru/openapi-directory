from dataclasses import dataclass, field
from typing import Enum

class OfacStatusEnum(str, Enum):
    PENDING = "PENDING"
    PASSED = "PASSED"
    FAILED = "FAILED"

