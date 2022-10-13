from dataclasses import dataclass, field
from typing import Enum

class WindingnessEnum(str, Enum):
    LOW = "low"
    NORMAL = "normal"
    HIGH = "high"

