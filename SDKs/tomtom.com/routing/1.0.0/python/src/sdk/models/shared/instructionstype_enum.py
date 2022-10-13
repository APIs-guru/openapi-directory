from dataclasses import dataclass, field
from typing import Enum

class InstructionsTypeEnum(str, Enum):
    CODED = "coded"
    TEXT = "text"
    TAGGED = "tagged"

