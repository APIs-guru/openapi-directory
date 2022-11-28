from dataclasses import dataclass, field
from enum import Enum

class StreamEnumTrackEnum(str, Enum):
    INBOUND_TRACK = "inbound_track"
    OUTBOUND_TRACK = "outbound_track"
    BOTH_TRACKS = "both_tracks"

