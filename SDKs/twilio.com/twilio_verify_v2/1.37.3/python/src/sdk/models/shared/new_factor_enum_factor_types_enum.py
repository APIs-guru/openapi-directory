from dataclasses import dataclass, field
from enum import Enum

class NewFactorEnumFactorTypesEnum(str, Enum):
    PUSH = "push"
    TOTP = "totp"

