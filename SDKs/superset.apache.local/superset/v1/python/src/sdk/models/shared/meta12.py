from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Meta12:
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'active' }})
    changed_on: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'changed_on', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    created_on: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_on', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    email: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    fail_login_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fail_login_count' }})
    first_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_name' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    last_login: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_login', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_name' }})
    login_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'login_count' }})
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'password' }})
    username: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'username' }})
    
