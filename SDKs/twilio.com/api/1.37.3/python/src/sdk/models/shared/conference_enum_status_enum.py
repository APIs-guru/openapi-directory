from dataclasses import dataclass, field
from enum import Enum

class ConferenceEnumStatusEnum(str, Enum):
    INIT = "init"
    IN_PROGRESS = "in-progress"
    COMPLETED = "completed"

