from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass_json
@dataclass
class TaskrouterV1WorkspaceTaskQueue:
    account_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_sid' }})
    assignment_activity_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assignment_activity_name' }})
    assignment_activity_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assignment_activity_sid' }})
    date_created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    date_updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_updated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    friendly_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'friendly_name' }})
    links: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'links' }})
    max_reserved_workers: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'max_reserved_workers' }})
    reservation_activity_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reservation_activity_name' }})
    reservation_activity_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reservation_activity_sid' }})
    sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sid' }})
    target_workers: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'target_workers' }})
    task_order: Optional[shared.TaskQueueEnumTaskOrderEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'task_order' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    workspace_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workspace_sid' }})
    
