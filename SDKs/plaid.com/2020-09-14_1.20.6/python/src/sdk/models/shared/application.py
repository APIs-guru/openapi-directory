from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Application:
    application_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'application_id' }})
    application_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'application_url' }})
    created_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    logo_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logo_url' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    reason_for_access: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reason_for_access' }})
    
