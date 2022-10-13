from dataclasses import dataclass, field
from typing import Enum

class EventEnumLevelEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    DEBUG = "DEBUG"
    INFO = "INFO"
    WARNING = "WARNING"
    ERROR = "ERROR"

