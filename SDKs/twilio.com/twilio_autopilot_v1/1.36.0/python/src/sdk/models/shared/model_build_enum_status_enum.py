from dataclasses import dataclass, field
from typing import Enum

class ModelBuildEnumStatusEnum(str, Enum):
    ENQUEUED = "enqueued"
    BUILDING = "building"
    COMPLETED = "completed"
    FAILED = "failed"
    CANCELED = "canceled"

