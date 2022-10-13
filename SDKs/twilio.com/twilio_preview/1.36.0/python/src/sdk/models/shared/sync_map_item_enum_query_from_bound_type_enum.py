from dataclasses import dataclass, field
from typing import Enum

class SyncMapItemEnumQueryFromBoundTypeEnum(str, Enum):
    INCLUSIVE = "inclusive"
    EXCLUSIVE = "exclusive"

