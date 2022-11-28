from dataclasses import dataclass, field
from enum import Enum

class UsageTriggerEnumTriggerFieldEnum(str, Enum):
    COUNT = "count"
    USAGE = "usage"
    PRICE = "price"

