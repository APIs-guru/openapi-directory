from dataclasses import dataclass, field
from enum import Enum

class ModelBuildEnumStatusEnum(str, Enum):
    ENQUEUED = "enqueued"
    BUILDING = "building"
    COMPLETED = "completed"
    FAILED = "failed"
    CANCELED = "canceled"

