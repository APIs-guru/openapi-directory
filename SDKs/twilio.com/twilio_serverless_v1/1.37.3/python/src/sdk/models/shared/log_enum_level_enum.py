from dataclasses import dataclass, field
from enum import Enum

class LogEnumLevelEnum(str, Enum):
    INFO = "info"
    WARN = "warn"
    ERROR = "error"

