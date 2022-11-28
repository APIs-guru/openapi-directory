from dataclasses import dataclass, field
from enum import Enum

class AssetVersionEnumVisibilityEnum(str, Enum):
    PUBLIC = "public"
    PRIVATE = "private"
    PROTECTED = "protected"

