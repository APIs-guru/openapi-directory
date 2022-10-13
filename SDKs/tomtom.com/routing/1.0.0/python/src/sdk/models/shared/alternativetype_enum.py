from dataclasses import dataclass, field
from typing import Enum

class AlternativeTypeEnum(str, Enum):
    ANY_ROUTE = "anyRoute"
    BETTER_ROUTE = "betterRoute"

