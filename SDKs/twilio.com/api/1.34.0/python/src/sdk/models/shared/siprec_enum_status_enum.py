from dataclasses import dataclass, field
from typing import Enum

class SiprecEnumStatusEnum(str, Enum):
    IN_PROGRESS = "in-progress"
    STOPPED = "stopped"

