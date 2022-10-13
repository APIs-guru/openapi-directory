from dataclasses import dataclass, field
from typing import Enum,List

class SyncListItemEnumQueryFromBoundTypeEnum(str, Enum):
    INCLUSIVE = "inclusive"
    EXCLUSIVE = "exclusive"

