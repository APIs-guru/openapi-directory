from dataclasses import dataclass, field
from enum import Enum

class MediaProcessorEnumStatusEnum(str, Enum):
    FAILED = "failed"
    STARTED = "started"
    ENDED = "ended"

