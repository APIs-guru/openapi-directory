from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class MonitorV1Event:
    account_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_sid' }})
    actor_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actor_sid' }})
    actor_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actor_type' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    event_data: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'event_data' }})
    event_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'event_date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    event_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'event_type' }})
    links: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'links' }})
    resource_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource_sid' }})
    resource_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource_type' }})
    sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sid' }})
    source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    source_ip_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source_ip_address' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
