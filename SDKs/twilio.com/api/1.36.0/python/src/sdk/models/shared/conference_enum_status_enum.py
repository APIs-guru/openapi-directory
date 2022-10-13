from dataclasses import dataclass, field
from typing import Enum

class ConferenceEnumStatusEnum(str, Enum):
    INIT = "init"
    IN_PROGRESS = "in-progress"
    COMPLETED = "completed"

