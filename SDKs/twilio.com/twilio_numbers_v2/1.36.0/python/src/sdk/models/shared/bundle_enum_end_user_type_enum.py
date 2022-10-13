from dataclasses import dataclass, field
from typing import Enum

class BundleEnumEndUserTypeEnum(str, Enum):
    INDIVIDUAL = "individual"
    BUSINESS = "business"

