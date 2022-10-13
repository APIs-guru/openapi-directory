from dataclasses import dataclass, field
from typing import Enum

class HouseEnumEnum(str, Enum):
    BICAMERAL = "Bicameral"
    COMMONS = "Commons"
    LORDS = "Lords"

