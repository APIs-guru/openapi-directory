from dataclasses import dataclass, field
from enum import Enum

class HillinessEnum(str, Enum):
    LOW = "low"
    NORMAL = "normal"
    HIGH = "high"

