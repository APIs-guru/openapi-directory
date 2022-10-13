from dataclasses import dataclass, field
from typing import Enum

class StateEnum(str, Enum):
    ACT = "ACT"
    NSW = "NSW"
    NT = "NT"
    QLD = "QLD"
    SA = "SA"
    TAS = "TAS"
    VIC = "VIC"
    WA = "WA"

