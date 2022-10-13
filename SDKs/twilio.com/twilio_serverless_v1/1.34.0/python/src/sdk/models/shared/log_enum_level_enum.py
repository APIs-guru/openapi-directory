from dataclasses import dataclass, field
from typing import Enum

class LogEnumLevelEnum(str, Enum):
    INFO = "info"
    WARN = "warn"
    ERROR = "error"

