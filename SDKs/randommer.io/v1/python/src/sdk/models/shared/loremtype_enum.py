from dataclasses import dataclass, field
from typing import Enum

class LoremTypeEnum(str, Enum):
    NORMAL = "normal"
    BUSINESS = "business"

