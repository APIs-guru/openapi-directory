from dataclasses import dataclass, field
from enum import Enum

class VideoRoomSummaryEnumRoomTypeEnum(str, Enum):
    GO = "go"
    PEER_TO_PEER = "peer_to_peer"
    GROUP = "group"
    GROUP_SMALL = "group_small"

