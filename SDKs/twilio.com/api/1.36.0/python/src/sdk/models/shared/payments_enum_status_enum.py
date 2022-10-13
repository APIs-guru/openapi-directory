from dataclasses import dataclass, field
from typing import Enum

class PaymentsEnumStatusEnum(str, Enum):
    COMPLETE = "complete"
    CANCEL = "cancel"

