from dataclasses import dataclass, field
from enum import Enum

class IPCommandEnumStatusEnum(str, Enum):
    QUEUED = "queued"
    SENT = "sent"
    RECEIVED = "received"
    FAILED = "failed"

