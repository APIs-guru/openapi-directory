from dataclasses import dataclass, field
from enum import Enum

class NodeCompositionEnum(str, Enum):
    AND = "and"
    OR = "or"

