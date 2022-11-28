from dataclasses import dataclass, field
from enum import Enum

class SuperannuationCalculationTypeEnum(str, Enum):
    FIXEDAMOUNT = "FIXEDAMOUNT"
    PERCENTAGEOFEARNINGS = "PERCENTAGEOFEARNINGS"
    STATUTORY = "STATUTORY"

