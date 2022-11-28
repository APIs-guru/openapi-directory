from dataclasses import dataclass, field
from enum import Enum

class HouseEnumEnum(str, Enum):
    BICAMERAL = "Bicameral"
    COMMONS = "Commons"
    LORDS = "Lords"

