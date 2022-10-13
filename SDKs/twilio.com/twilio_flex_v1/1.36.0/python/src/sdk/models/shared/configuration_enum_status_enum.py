from dataclasses import dataclass, field
from typing import Enum

class ConfigurationEnumStatusEnum(str, Enum):
    OK = "ok"
    INPROGRESS = "inprogress"
    NOTSTARTED = "notstarted"

