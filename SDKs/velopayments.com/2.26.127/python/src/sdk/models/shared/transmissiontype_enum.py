from dataclasses import dataclass, field
from enum import Enum

class TransmissionTypeEnum(str, Enum):
    SAME_DAY_ACH = "SAME_DAY_ACH"
    WIRE = "WIRE"
    ACH = "ACH"

