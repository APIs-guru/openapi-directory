from dataclasses import dataclass, field
from enum import Enum

class FundingAccountTypeEnum(str, Enum):
    FBO = "FBO"
    WUBS_DECOUPLED = "WUBS_DECOUPLED"

