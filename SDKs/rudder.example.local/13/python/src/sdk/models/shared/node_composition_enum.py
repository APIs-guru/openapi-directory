from dataclasses import dataclass, field
from typing import Enum

class NodeCompositionEnum(str, Enum):
    AND = "and"
    OR = "or"

