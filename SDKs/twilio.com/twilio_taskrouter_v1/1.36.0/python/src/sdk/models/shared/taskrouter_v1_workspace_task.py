from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from . import task_enum_status_enum


@dataclass_json
@dataclass
class TaskrouterV1WorkspaceTask:
    account_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_sid' }})
    addons: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addons' }})
    age: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'age' }})
    assignment_status: Optional[task_enum_status_enum.TaskEnumStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assignment_status' }})
    attributes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributes' }})
    date_created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    date_updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_updated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    links: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'links' }})
    priority: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'priority' }})
    reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reason' }})
    sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sid' }})
    task_channel_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'task_channel_sid' }})
    task_channel_unique_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'task_channel_unique_name' }})
    task_queue_entered_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'task_queue_entered_date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    task_queue_friendly_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'task_queue_friendly_name' }})
    task_queue_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'task_queue_sid' }})
    timeout: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeout' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    workflow_friendly_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workflow_friendly_name' }})
    workflow_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workflow_sid' }})
    workspace_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workspace_sid' }})
    
