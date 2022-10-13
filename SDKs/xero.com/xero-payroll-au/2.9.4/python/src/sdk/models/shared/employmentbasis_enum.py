from dataclasses import dataclass, field
from typing import Enum

class EmploymentBasisEnum(str, Enum):
    FULLTIME = "FULLTIME"
    PARTTIME = "PARTTIME"
    CASUAL = "CASUAL"
    LABOURHIRE = "LABOURHIRE"
    SUPERINCOMESTREAM = "SUPERINCOMESTREAM"

