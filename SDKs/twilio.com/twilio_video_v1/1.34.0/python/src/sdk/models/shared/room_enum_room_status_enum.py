from dataclasses import dataclass, field
from typing import Enum

class RoomEnumRoomStatusEnum(str, Enum):
    IN_PROGRESS = "in-progress"
    COMPLETED = "completed"
    FAILED = "failed"

