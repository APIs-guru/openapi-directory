from dataclasses import dataclass, field
from typing import Enum

class FlowTrafficTypeEnum(str, Enum):
    INTERNET_TRAFFIC = "INTERNET_TRAFFIC"
    EAST_WEST_TRAFFIC = "EAST_WEST_TRAFFIC"

