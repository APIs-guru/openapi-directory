from dataclasses import dataclass, field
from typing import Enum

class SuperannuationCalculationTypeEnum(str, Enum):
    FIXEDAMOUNT = "FIXEDAMOUNT"
    PERCENTAGEOFEARNINGS = "PERCENTAGEOFEARNINGS"
    STATUTORY = "STATUTORY"

