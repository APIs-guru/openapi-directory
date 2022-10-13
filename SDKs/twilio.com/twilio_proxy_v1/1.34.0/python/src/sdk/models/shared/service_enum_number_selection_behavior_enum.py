from dataclasses import dataclass, field
from typing import Enum

class ServiceEnumNumberSelectionBehaviorEnum(str, Enum):
    AVOID_STICKY = "avoid-sticky"
    PREFER_STICKY = "prefer-sticky"

