from dataclasses import dataclass, field
from typing import Enum

class FactorEnumFactorTypesEnum(str, Enum):
    PUSH = "push"
    TOTP = "totp"

