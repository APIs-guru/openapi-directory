from dataclasses import dataclass, field
from typing import Enum

class SuperFundTypeEnum(str, Enum):
    REGULATED = "REGULATED"
    SMSF = "SMSF"

