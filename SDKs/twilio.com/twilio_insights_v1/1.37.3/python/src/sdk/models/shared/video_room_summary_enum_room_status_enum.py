from dataclasses import dataclass, field
from enum import Enum

class VideoRoomSummaryEnumRoomStatusEnum(str, Enum):
    IN_PROGRESS = "in_progress"
    COMPLETED = "completed"

