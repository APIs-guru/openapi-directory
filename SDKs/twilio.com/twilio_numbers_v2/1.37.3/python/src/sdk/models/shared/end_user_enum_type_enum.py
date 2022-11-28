from dataclasses import dataclass, field
from enum import Enum

class EndUserEnumTypeEnum(str, Enum):
    INDIVIDUAL = "individual"
    BUSINESS = "business"

