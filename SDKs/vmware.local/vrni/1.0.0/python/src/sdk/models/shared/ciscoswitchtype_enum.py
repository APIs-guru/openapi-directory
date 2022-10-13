from dataclasses import dataclass, field
from typing import Enum

class CiscoSwitchTypeEnum(str, Enum):
    CATALYST_3000 = "CATALYST_3000"
    CATALYST_4500 = "CATALYST_4500"
    CATALYST_6500 = "CATALYST_6500"
    NEXUS_5_K = "NEXUS_5K"
    NEXUS_7_K = "NEXUS_7K"
    NEXUS_9_K = "NEXUS_9K"

