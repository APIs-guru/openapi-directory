from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Statistics:
    active_devices: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'activeDevices' }})
    active_users: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'activeUsers' }})
    capture_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'captureTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    messages_received: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'messagesReceived' }})
    messages_stored: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'messagesStored' }})
    requests: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requests' }})
    
