from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TaskrouterV1WorkspaceWorkerWorkerChannel:
    account_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_sid' }})
    assigned_tasks: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assigned_tasks' }})
    available: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'available' }})
    available_capacity_percentage: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'available_capacity_percentage' }})
    configured_capacity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configured_capacity' }})
    date_created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    date_updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_updated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sid' }})
    task_channel_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'task_channel_sid' }})
    task_channel_unique_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'task_channel_unique_name' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    worker_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'worker_sid' }})
    workspace_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workspace_sid' }})
    
