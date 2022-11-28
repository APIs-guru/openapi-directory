from dataclasses import dataclass, field
from enum import Enum

class CommandEnumCommandModeEnum(str, Enum):
    TEXT = "text"
    BINARY = "binary"

