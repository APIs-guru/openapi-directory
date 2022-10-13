from dataclasses import dataclass, field
from typing import Enum

class EarningsRateCalculationTypeEnum(str, Enum):
    USEEARNINGSRATE = "USEEARNINGSRATE"
    ENTEREARNINGSRATE = "ENTEREARNINGSRATE"
    ANNUALSALARY = "ANNUALSALARY"

