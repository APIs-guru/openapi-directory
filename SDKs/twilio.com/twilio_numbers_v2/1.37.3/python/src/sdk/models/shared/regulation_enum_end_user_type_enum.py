from dataclasses import dataclass, field
from enum import Enum

class RegulationEnumEndUserTypeEnum(str, Enum):
    INDIVIDUAL = "individual"
    BUSINESS = "business"

