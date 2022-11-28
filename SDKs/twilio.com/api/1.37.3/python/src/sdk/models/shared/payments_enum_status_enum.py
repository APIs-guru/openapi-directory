from dataclasses import dataclass, field
from enum import Enum

class PaymentsEnumStatusEnum(str, Enum):
    COMPLETE = "complete"
    CANCEL = "cancel"

