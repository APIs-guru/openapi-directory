from dataclasses import dataclass, field
from typing import Enum

class IPCommandEnumStatusEnum(str, Enum):
    QUEUED = "queued"
    SENT = "sent"
    RECEIVED = "received"
    FAILED = "failed"

