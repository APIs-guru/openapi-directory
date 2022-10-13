from dataclasses import dataclass, field
from typing import Enum

class NewFactorEnumFactorTypesEnum(str, Enum):
    PUSH = "push"
    TOTP = "totp"

