from dataclasses import dataclass, field
from typing import Enum

class ServiceEnumScanMessageContentEnum(str, Enum):
    INHERIT = "inherit"
    ENABLE = "enable"
    DISABLE = "disable"

