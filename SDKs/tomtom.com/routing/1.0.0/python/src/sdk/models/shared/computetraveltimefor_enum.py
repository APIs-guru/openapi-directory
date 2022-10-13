from dataclasses import dataclass, field
from typing import Enum

class ComputeTravelTimeForEnum(str, Enum):
    NONE = "none"
    ALL = "all"

