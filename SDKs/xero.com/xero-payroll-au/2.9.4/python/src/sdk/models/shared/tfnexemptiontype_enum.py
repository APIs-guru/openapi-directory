from dataclasses import dataclass, field
from enum import Enum

class TfnExemptionTypeEnum(str, Enum):
    NOTQUOTED = "NOTQUOTED"
    PENDING = "PENDING"
    PENSIONER = "PENSIONER"
    UNDER18 = "UNDER18"

