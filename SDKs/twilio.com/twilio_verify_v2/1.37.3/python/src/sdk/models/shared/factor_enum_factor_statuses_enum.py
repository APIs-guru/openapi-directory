from dataclasses import dataclass, field
from enum import Enum

class FactorEnumFactorStatusesEnum(str, Enum):
    UNVERIFIED = "unverified"
    VERIFIED = "verified"

