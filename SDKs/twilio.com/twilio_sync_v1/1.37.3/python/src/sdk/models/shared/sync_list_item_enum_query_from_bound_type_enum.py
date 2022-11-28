from dataclasses import dataclass, field
from enum import Enum

class SyncListItemEnumQueryFromBoundTypeEnum(str, Enum):
    INCLUSIVE = "inclusive"
    EXCLUSIVE = "exclusive"

