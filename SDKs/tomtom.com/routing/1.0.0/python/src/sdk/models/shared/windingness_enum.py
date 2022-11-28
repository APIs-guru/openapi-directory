from dataclasses import dataclass, field
from enum import Enum

class WindingnessEnum(str, Enum):
    LOW = "low"
    NORMAL = "normal"
    HIGH = "high"

