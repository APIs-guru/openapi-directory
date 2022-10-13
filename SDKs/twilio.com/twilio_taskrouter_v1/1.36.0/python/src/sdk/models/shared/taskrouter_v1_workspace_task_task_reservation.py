from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from . import task_reservation_enum_status_enum


@dataclass_json
@dataclass
class TaskrouterV1WorkspaceTaskTaskReservation:
    account_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_sid' }})
    date_created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    date_updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_updated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    links: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'links' }})
    reservation_status: Optional[task_reservation_enum_status_enum.TaskReservationEnumStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reservation_status' }})
    sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sid' }})
    task_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'task_sid' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    worker_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'worker_name' }})
    worker_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'worker_sid' }})
    workspace_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workspace_sid' }})
    
