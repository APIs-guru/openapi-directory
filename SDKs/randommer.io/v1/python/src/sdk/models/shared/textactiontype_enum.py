from dataclasses import dataclass, field
from typing import Enum

class TextActionTypeEnum(str, Enum):
    TRANSFORM = "Transform"
    REPLACE = "Replace"

