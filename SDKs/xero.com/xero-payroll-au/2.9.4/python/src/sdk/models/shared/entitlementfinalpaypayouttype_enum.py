from dataclasses import dataclass, field
from enum import Enum

class EntitlementFinalPayPayoutTypeEnum(str, Enum):
    NOTPAIDOUT = "NOTPAIDOUT"
    PAIDOUT = "PAIDOUT"

