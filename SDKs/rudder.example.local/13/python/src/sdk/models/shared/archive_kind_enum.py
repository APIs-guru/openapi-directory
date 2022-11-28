from dataclasses import dataclass, field
from enum import Enum

class ArchiveKindEnum(str, Enum):
    FULL = "full"
    GROUPS = "groups"
    RULES = "rules"
    DIRECTIVES = "directives"
    PARAMETERS = "parameters"

