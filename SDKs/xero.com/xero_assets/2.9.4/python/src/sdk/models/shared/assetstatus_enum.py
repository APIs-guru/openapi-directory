from dataclasses import dataclass, field
from enum import Enum

class AssetStatusEnum(str, Enum):
    DRAFT = "Draft"
    REGISTERED = "Registered"
    DISPOSED = "Disposed"

