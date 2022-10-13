from dataclasses import dataclass, field
from typing import Enum

class EndUserEnumTypeEnum(str, Enum):
    INDIVIDUAL = "individual"
    BUSINESS = "business"

