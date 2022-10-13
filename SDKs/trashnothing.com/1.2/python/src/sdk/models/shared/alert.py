from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Alert:
    alert_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alert_id' }})
    last_sent: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_sent', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    search: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'search' }})
    send_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'send_count' }})
    types: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'types' }})
    user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user_id' }})
    
