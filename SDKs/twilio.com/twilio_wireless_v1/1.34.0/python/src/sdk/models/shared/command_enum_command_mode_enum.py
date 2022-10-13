from dataclasses import dataclass, field
from typing import Enum

class CommandEnumCommandModeEnum(str, Enum):
    TEXT = "text"
    BINARY = "binary"

