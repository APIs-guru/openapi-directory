from dataclasses import dataclass, field
from enum import Enum

class AccountEnumStatusEnum(str, Enum):
    ACTIVE = "active"
    SUSPENDED = "suspended"
    CLOSED = "closed"

