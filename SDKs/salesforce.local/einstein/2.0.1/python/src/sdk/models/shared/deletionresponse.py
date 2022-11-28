from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class DeletionResponseStatusOfTheDeletionEnum(str, Enum):
    QUEUED = "QUEUED"
    RUNNING = "RUNNING"
    SUCCEEDED_WAITING_FOR_CACHE_REMOVAL = "SUCCEEDED_WAITING_FOR_CACHE_REMOVAL"
    SUCCEEDED = "SUCCEEDED"
    KILLED = "KILLED"
    FAILED = "FAILED"
    RETRY = "RETRY"

class DeletionResponseObjectThatSBeingDeletedEnum(str, Enum):
    DATASET = "DATASET"
    MODEL = "MODEL"


@dataclass_json
@dataclass
class DeletionResponse:
    deleted_object_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deletedObjectId') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    object: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('object') }})
    organization_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('organizationId') }})
    progress: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('progress') }})
    status: Optional[DeletionResponseStatusOfTheDeletionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    type: Optional[DeletionResponseObjectThatSBeingDeletedEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
