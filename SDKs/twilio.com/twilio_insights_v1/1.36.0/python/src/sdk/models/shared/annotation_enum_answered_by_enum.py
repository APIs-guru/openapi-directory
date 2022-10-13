from dataclasses import dataclass, field
from typing import Enum

class AnnotationEnumAnsweredByEnum(str, Enum):
    UNKNOWN_ANSWERED_BY = "unknown_answered_by"
    HUMAN = "human"
    MACHINE = "machine"

