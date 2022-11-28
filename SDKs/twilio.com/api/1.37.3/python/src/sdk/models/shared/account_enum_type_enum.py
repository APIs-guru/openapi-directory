from dataclasses import dataclass, field
from enum import Enum

class AccountEnumTypeEnum(str, Enum):
    TRIAL = "Trial"
    FULL = "Full"

