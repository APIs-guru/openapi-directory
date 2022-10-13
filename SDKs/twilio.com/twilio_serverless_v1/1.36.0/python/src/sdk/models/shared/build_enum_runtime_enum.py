from dataclasses import dataclass, field
from typing import Enum

class BuildEnumRuntimeEnum(str, Enum):
    NODE8 = "node8"
    NODE10 = "node10"
    NODE12 = "node12"
    NODE14 = "node14"

