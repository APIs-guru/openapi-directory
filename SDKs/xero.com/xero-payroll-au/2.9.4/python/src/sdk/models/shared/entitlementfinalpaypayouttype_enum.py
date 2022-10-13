from dataclasses import dataclass, field
from typing import Enum

class EntitlementFinalPayPayoutTypeEnum(str, Enum):
    NOTPAIDOUT = "NOTPAIDOUT"
    PAIDOUT = "PAIDOUT"

