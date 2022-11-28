from dataclasses import dataclass, field
from enum import Enum

class ServiceEnumScanMessageContentEnum(str, Enum):
    INHERIT = "inherit"
    ENABLE = "enable"
    DISABLE = "disable"

