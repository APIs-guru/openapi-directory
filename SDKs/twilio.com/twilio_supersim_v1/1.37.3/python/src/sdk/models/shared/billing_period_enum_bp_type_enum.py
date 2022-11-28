from dataclasses import dataclass, field
from enum import Enum

class BillingPeriodEnumBpTypeEnum(str, Enum):
    READY = "ready"
    ACTIVE = "active"

