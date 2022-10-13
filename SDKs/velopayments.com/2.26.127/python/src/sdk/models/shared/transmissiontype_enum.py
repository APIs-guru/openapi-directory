from dataclasses import dataclass, field
from typing import Enum

class TransmissionTypeEnum(str, Enum):
    SAME_DAY_ACH = "SAME_DAY_ACH"
    WIRE = "WIRE"
    ACH = "ACH"

