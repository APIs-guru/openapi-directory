from dataclasses import dataclass, field
from typing import Enum

class CallEnumUpdateStatusEnum(str, Enum):
    CANCELED = "canceled"
    COMPLETED = "completed"

