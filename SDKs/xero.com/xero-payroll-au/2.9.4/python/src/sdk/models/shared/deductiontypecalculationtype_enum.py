from dataclasses import dataclass, field
from typing import Enum

class DeductionTypeCalculationTypeEnum(str, Enum):
    FIXEDAMOUNT = "FIXEDAMOUNT"
    PRETAX = "PRETAX"
    POSTTAX = "POSTTAX"

