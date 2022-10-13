from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class LinkTokenCreateRequestUser:
    client_user_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'client_user_id' }})
    date_of_birth: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_of_birth', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    email_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email_address' }})
    email_address_verified_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email_address_verified_time', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    legal_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'legal_name' }})
    phone_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phone_number' }})
    phone_number_verified_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phone_number_verified_time', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    ssn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ssn' }})
    
