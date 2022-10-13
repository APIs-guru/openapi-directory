from dataclasses import dataclass, field
from typing import Enum

class RegulationEnumEndUserTypeEnum(str, Enum):
    INDIVIDUAL = "individual"
    BUSINESS = "business"

