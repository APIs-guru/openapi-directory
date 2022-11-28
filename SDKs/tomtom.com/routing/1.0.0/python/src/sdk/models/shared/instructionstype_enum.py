from dataclasses import dataclass, field
from enum import Enum

class InstructionsTypeEnum(str, Enum):
    CODED = "coded"
    TEXT = "text"
    TAGGED = "tagged"

