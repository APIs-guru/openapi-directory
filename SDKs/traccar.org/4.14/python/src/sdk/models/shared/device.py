from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Device:
    attributes: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributes' }})
    category: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'category' }})
    contact: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contact' }})
    disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disabled' }})
    geofence_ids: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'geofenceIds' }})
    group_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groupId' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    last_update: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    model: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'model' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    phone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phone' }})
    position_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'positionId' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    unique_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uniqueId' }})
    
