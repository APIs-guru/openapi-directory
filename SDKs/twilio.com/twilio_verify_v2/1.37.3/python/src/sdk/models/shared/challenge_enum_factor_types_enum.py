from dataclasses import dataclass, field
from enum import Enum

class ChallengeEnumFactorTypesEnum(str, Enum):
    PUSH = "push"
    TOTP = "totp"

