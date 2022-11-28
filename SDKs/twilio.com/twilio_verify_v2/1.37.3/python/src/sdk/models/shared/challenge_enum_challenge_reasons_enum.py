from dataclasses import dataclass, field
from enum import Enum

class ChallengeEnumChallengeReasonsEnum(str, Enum):
    NONE = "none"
    NOT_NEEDED = "not_needed"
    NOT_REQUESTED = "not_requested"

