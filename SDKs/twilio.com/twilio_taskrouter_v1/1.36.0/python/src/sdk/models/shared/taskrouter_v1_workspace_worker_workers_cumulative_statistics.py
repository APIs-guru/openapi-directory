from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TaskrouterV1WorkspaceWorkerWorkersCumulativeStatistics:
    account_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_sid' }})
    activity_durations: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'activity_durations' }})
    end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'end_time', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    reservations_accepted: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reservations_accepted' }})
    reservations_canceled: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reservations_canceled' }})
    reservations_created: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reservations_created' }})
    reservations_rejected: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reservations_rejected' }})
    reservations_rescinded: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reservations_rescinded' }})
    reservations_timed_out: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reservations_timed_out' }})
    start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start_time', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    workspace_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workspace_sid' }})
    
