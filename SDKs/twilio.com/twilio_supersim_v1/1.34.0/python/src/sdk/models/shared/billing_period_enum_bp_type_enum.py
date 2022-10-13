from dataclasses import dataclass, field
from typing import Enum

class BillingPeriodEnumBpTypeEnum(str, Enum):
    READY = "ready"
    ACTIVE = "active"

