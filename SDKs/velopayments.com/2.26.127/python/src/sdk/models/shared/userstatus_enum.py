from dataclasses import dataclass, field
from typing import Enum

class UserStatusEnum(str, Enum):
    ENABLED = "ENABLED"
    DISABLED = "DISABLED"
    PENDING = "PENDING"

