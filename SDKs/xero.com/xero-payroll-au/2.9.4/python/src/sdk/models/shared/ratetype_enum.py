from dataclasses import dataclass, field
from typing import Enum

class RateTypeEnum(str, Enum):
    FIXEDAMOUNT = "FIXEDAMOUNT"
    MULTIPLE = "MULTIPLE"
    RATEPERUNIT = "RATEPERUNIT"

