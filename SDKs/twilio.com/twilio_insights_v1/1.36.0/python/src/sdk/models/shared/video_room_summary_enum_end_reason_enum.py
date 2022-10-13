from dataclasses import dataclass, field
from typing import Enum

class VideoRoomSummaryEnumEndReasonEnum(str, Enum):
    ROOM_ENDED_VIA_API = "room_ended_via_api"
    TIMEOUT = "timeout"

