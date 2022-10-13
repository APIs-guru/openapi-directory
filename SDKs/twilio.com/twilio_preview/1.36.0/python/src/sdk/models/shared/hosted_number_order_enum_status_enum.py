from dataclasses import dataclass, field
from typing import Enum

class HostedNumberOrderEnumStatusEnum(str, Enum):
    RECEIVED = "received"
    PENDING_VERIFICATION = "pending-verification"
    VERIFIED = "verified"
    PENDING_LOA = "pending-loa"
    CARRIER_PROCESSING = "carrier-processing"
    TESTING = "testing"
    COMPLETED = "completed"
    FAILED = "failed"
    ACTION_REQUIRED = "action-required"

