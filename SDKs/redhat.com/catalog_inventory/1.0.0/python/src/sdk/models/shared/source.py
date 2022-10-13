from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Source:
    archived_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'archived_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    availability_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'availability_message' }})
    availability_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'availability_status' }})
    cloud_connector_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cloud_connector_id' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    info: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'info' }})
    last_available_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_available_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_checked_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_checked_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_refresh_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_refresh_message' }})
    last_successful_refresh_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_successful_refresh_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    previous_sha: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_sha' }})
    previous_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_size' }})
    refresh_finished_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'refresh_finished_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    refresh_started_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'refresh_started_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    refresh_state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'refresh_state' }})
    refresh_task_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'refresh_task_id' }})
    uid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uid' }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
