from dataclasses import dataclass, field
from enum import Enum

class SyncMapItemEnumQueryFromBoundTypeEnum(str, Enum):
    INCLUSIVE = "inclusive"
    EXCLUSIVE = "exclusive"

