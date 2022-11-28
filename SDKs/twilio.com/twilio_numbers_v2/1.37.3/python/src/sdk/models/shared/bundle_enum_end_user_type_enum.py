from dataclasses import dataclass, field
from enum import Enum

class BundleEnumEndUserTypeEnum(str, Enum):
    INDIVIDUAL = "individual"
    BUSINESS = "business"

