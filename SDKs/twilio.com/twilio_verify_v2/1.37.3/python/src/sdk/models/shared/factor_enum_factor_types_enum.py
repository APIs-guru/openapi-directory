from dataclasses import dataclass, field
from enum import Enum

class FactorEnumFactorTypesEnum(str, Enum):
    PUSH = "push"
    TOTP = "totp"

