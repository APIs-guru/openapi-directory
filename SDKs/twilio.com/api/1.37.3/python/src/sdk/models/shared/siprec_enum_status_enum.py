from dataclasses import dataclass, field
from enum import Enum

class SiprecEnumStatusEnum(str, Enum):
    IN_PROGRESS = "in-progress"
    STOPPED = "stopped"

