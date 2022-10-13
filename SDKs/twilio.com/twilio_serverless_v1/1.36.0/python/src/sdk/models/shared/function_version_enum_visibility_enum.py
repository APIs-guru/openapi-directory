from dataclasses import dataclass, field
from typing import Enum

class FunctionVersionEnumVisibilityEnum(str, Enum):
    PUBLIC = "public"
    PRIVATE = "private"
    PROTECTED = "protected"

