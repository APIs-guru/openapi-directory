from dataclasses import dataclass, field
from enum import Enum

class UserEnumStateTypeEnum(str, Enum):
    ACTIVE = "active"
    DEACTIVATED = "deactivated"

