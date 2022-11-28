from dataclasses import dataclass, field
from enum import Enum

class FunctionVersionEnumVisibilityEnum(str, Enum):
    PUBLIC = "public"
    PRIVATE = "private"
    PROTECTED = "protected"

