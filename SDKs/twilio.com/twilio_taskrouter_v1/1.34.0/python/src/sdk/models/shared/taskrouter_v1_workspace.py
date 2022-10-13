from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass_json
@dataclass
class TaskrouterV1Workspace:
    account_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_sid' }})
    date_created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    date_updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_updated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    default_activity_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'default_activity_name' }})
    default_activity_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'default_activity_sid' }})
    event_callback_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'event_callback_url' }})
    events_filter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'events_filter' }})
    friendly_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'friendly_name' }})
    links: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'links' }})
    multi_task_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'multi_task_enabled' }})
    prioritize_queue_order: Optional[shared.WorkspaceEnumQueueOrderEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'prioritize_queue_order' }})
    sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sid' }})
    timeout_activity_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeout_activity_name' }})
    timeout_activity_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeout_activity_sid' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
