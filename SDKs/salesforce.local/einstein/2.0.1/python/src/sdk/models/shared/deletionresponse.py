from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class DeletionResponseStatusStatusOfTheDeletionEnum(str, Enum):
    QUEUED = "QUEUED"
    RUNNING = "RUNNING"
    SUCCEEDED_WAITING_FOR_CACHE_REMOVAL = "SUCCEEDED_WAITING_FOR_CACHE_REMOVAL"
    SUCCEEDED = "SUCCEEDED"
    KILLED = "KILLED"
    FAILED = "FAILED"
    RETRY = "RETRY"

class DeletionResponseTypeObjectThatSBeingDeletedEnum(str, Enum):
    DATASET = "DATASET"
    MODEL = "MODEL"


@dataclass_json
@dataclass
class DeletionResponse:
    deleted_object_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deletedObjectId' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    object: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'object' }})
    organization_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'organizationId' }})
    progress: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'progress' }})
    status: Optional[DeletionResponseStatusStatusOfTheDeletionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    type: Optional[DeletionResponseTypeObjectThatSBeingDeletedEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
