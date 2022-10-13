from dataclasses import dataclass, field
from typing import Enum

class RoomEnumRoomTypeEnum(str, Enum):
    GO = "go"
    PEER_TO_PEER = "peer-to-peer"
    GROUP = "group"
    GROUP_SMALL = "group-small"

