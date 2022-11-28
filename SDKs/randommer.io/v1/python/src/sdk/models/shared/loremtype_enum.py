from dataclasses import dataclass, field
from enum import Enum

class LoremTypeEnum(str, Enum):
    NORMAL = "normal"
    BUSINESS = "business"

