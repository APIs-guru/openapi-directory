from dataclasses import dataclass, field
from typing import Enum

class BundleEnumSortByEnum(str, Enum):
    VALID_UNTIL = "valid-until"
    DATE_UPDATED = "date-updated"

