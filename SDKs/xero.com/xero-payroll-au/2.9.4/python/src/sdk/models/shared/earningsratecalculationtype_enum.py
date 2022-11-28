from dataclasses import dataclass, field
from enum import Enum

class EarningsRateCalculationTypeEnum(str, Enum):
    USEEARNINGSRATE = "USEEARNINGSRATE"
    ENTEREARNINGSRATE = "ENTEREARNINGSRATE"
    ANNUALSALARY = "ANNUALSALARY"

