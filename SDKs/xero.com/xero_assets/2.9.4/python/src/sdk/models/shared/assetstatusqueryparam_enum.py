from dataclasses import dataclass, field
from typing import Enum

class AssetStatusQueryParamEnum(str, Enum):
    DRAFT = "DRAFT"
    REGISTERED = "REGISTERED"
    DISPOSED = "DISPOSED"

