from dataclasses import dataclass, field
from typing import Enum

class AssetVersionEnumVisibilityEnum(str, Enum):
    PUBLIC = "public"
    PRIVATE = "private"
    PROTECTED = "protected"

