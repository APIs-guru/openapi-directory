from dataclasses import dataclass, field
from typing import Enum

class SourceAccountTypeEnum(str, Enum):
    FBO = "FBO"
    WUBS_DECOUPLED = "WUBS_DECOUPLED"

