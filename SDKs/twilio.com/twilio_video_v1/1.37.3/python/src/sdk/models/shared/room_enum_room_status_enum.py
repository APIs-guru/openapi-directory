from dataclasses import dataclass, field
from enum import Enum

class RoomEnumRoomStatusEnum(str, Enum):
    IN_PROGRESS = "in-progress"
    COMPLETED = "completed"
    FAILED = "failed"

