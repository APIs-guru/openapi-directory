from dataclasses import dataclass, field
from typing import Enum

class UserEnumStateTypeEnum(str, Enum):
    ACTIVE = "active"
    DEACTIVATED = "deactivated"

