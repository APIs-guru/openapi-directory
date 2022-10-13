from dataclasses import dataclass, field
from typing import Enum

class EsimProfileEnumStatusEnum(str, Enum):
    NEW = "new"
    RESERVING = "reserving"
    AVAILABLE = "available"
    DOWNLOADED = "downloaded"
    INSTALLED = "installed"
    FAILED = "failed"

