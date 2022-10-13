from dataclasses import dataclass, field
from typing import Enum

class UsageTriggerEnumTriggerFieldEnum(str, Enum):
    COUNT = "count"
    USAGE = "usage"
    PRICE = "price"

