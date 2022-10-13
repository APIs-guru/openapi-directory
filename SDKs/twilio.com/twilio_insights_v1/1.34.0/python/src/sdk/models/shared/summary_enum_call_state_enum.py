from dataclasses import dataclass, field
from typing import Enum

class SummaryEnumCallStateEnum(str, Enum):
    RINGING = "ringing"
    COMPLETED = "completed"
    BUSY = "busy"
    FAIL = "fail"
    NOANSWER = "noanswer"
    CANCELED = "canceled"
    ANSWERED = "answered"
    UNDIALED = "undialed"

