from dataclasses import dataclass, field
from typing import Enum

class NodeDeleteModeEnum(str, Enum):
    MOVE = "move"
    ERASE = "erase"

