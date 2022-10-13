from dataclasses import dataclass, field
from typing import Enum

class HillinessEnum(str, Enum):
    LOW = "low"
    NORMAL = "normal"
    HIGH = "high"

