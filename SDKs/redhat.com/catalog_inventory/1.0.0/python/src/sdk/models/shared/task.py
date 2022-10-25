from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json

class TaskStateEnum(str, Enum):
    PENDING = "pending"
    QUEUED = "queued"
    RUNNING = "running"
    TIMEDOUT = "timedout"
    COMPLETED = "completed"

class TaskStatusEnum(str, Enum):
    OK = "ok"
    WARN = "warn"
    UNCHANGED = "unchanged"
    ERROR = "error"


@dataclass_json
@dataclass
class Task:
    archived_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'archived_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    child_task_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'child_task_id' }})
    completed_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'completed_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    controller_message_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'controller_message_id' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    input: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'input' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    output: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'output' }})
    owner: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'owner' }})
    source_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source_id' }})
    state: Optional[TaskStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    status: Optional[TaskStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    target_source_ref: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'target_source_ref' }})
    target_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'target_type' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
