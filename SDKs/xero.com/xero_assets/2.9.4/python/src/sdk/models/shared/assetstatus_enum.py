from dataclasses import dataclass, field
from typing import Enum

class AssetStatusEnum(str, Enum):
    DRAFT = "Draft"
    REGISTERED = "Registered"
    DISPOSED = "Disposed"

