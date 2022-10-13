from dataclasses import dataclass, field
from typing import Enum

class ChallengeEnumFactorTypesEnum(str, Enum):
    PUSH = "push"
    TOTP = "totp"

