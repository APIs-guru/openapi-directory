from dataclasses import dataclass, field
from typing import Enum

class BankTransferEventTypeEnum(str, Enum):
    PENDING = "pending"
    CANCELLED = "cancelled"
    FAILED = "failed"
    POSTED = "posted"
    REVERSED = "reversed"
    RECEIVER_PENDING = "receiver_pending"
    RECEIVER_POSTED = "receiver_posted"

