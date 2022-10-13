from dataclasses import dataclass, field
from typing import Enum

class AccountSelectionCardinalityEnum(str, Enum):
    SINGLE_SELECT = "SINGLE_SELECT"
    MULTI_SELECT = "MULTI_SELECT"
    ALL = "ALL"

