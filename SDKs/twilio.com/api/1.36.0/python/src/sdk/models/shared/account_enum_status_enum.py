from dataclasses import dataclass, field
from typing import Enum

class AccountEnumStatusEnum(str, Enum):
    ACTIVE = "active"
    SUSPENDED = "suspended"
    CLOSED = "closed"

