from dataclasses import dataclass, field
from enum import Enum

class ComputeTravelTimeForEnum(str, Enum):
    NONE = "none"
    ALL = "all"

