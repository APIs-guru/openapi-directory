from dataclasses import dataclass, field
from typing import Enum

class SuperannuationContributionTypeEnum(str, Enum):
    SGC = "SGC"
    SALARYSACRIFICE = "SALARYSACRIFICE"
    EMPLOYERADDITIONAL = "EMPLOYERADDITIONAL"
    EMPLOYEE = "EMPLOYEE"

