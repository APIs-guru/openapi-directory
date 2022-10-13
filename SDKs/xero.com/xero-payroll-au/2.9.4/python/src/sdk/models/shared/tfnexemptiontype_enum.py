from dataclasses import dataclass, field
from typing import Enum

class TfnExemptionTypeEnum(str, Enum):
    NOTQUOTED = "NOTQUOTED"
    PENDING = "PENDING"
    PENSIONER = "PENSIONER"
    UNDER18 = "UNDER18"

