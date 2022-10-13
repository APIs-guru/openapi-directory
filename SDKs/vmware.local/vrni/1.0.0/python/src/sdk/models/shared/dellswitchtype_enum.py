from dataclasses import dataclass, field
from typing import Enum

class DellSwitchTypeEnum(str, Enum):
    FORCE_10_MXL_10 = "FORCE_10_MXL_10"
    POWERCONNECT_8024 = "POWERCONNECT_8024"
    S4048 = "S4048"
    Z9100 = "Z9100"
    S6000 = "S6000"

