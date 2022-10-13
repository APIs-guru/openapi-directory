from dataclasses import dataclass, field
from typing import Enum

class VideoRoomSummaryEnumProcessingStateEnum(str, Enum):
    COMPLETE = "complete"
    IN_PROGRESS = "in_progress"

