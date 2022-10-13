from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Event:
    attributes: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributes' }})
    device_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceId' }})
    event_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    geofence_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'geofenceId' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    maintenance_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maintenanceId' }})
    position_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'positionId' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
