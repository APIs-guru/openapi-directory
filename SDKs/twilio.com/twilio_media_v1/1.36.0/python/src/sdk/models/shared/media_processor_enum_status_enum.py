from dataclasses import dataclass, field
from typing import Enum

class MediaProcessorEnumStatusEnum(str, Enum):
    FAILED = "failed"
    STARTED = "started"
    ENDED = "ended"

