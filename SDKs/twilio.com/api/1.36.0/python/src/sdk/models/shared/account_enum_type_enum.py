from dataclasses import dataclass, field
from typing import Enum

class AccountEnumTypeEnum(str, Enum):
    TRIAL = "Trial"
    FULL = "Full"

