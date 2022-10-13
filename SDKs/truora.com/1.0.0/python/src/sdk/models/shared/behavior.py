from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Behavior:
    birth_date: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'birth_date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    country: Any = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country' }})
    creation_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creation_date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    document_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'document_id' }})
    document_type: Any = field(default=None, metadata={'dataclasses_json': { 'field_name': 'document_type' }})
    email: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    feedback_date: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'feedback_date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    first_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_name' }})
    last_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_name' }})
    phone_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phone_number' }})
    reason: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reason' }})
    
