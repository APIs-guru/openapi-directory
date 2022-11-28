from dataclasses import dataclass, field
from enum import Enum

class AssetStatusQueryParamEnum(str, Enum):
    DRAFT = "DRAFT"
    REGISTERED = "REGISTERED"
    DISPOSED = "DISPOSED"

