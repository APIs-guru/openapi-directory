from dataclasses import dataclass, field
from enum import Enum

class PlayerStreamerEnumEndedReasonEnum(str, Enum):
    ENDED_VIA_API = "ended-via-api"
    MAX_DURATION_EXCEEDED = "max-duration-exceeded"
    STREAM_DISCONNECTED_BY_SOURCE = "stream-disconnected-by-source"
    UNEXPECTED_FAILURE = "unexpected-failure"

