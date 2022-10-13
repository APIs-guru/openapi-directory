from dataclasses import dataclass, field
from typing import Enum

class FactorEnumFactorStatusesEnum(str, Enum):
    UNVERIFIED = "unverified"
    VERIFIED = "verified"

