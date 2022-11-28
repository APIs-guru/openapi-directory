from dataclasses import dataclass, field
from enum import Enum

class CallSummariesEnumCallStateEnum(str, Enum):
    RINGING = "ringing"
    COMPLETED = "completed"
    BUSY = "busy"
    FAIL = "fail"
    NOANSWER = "noanswer"
    CANCELED = "canceled"
    ANSWERED = "answered"
    UNDIALED = "undialed"

