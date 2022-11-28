from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Meta12:
    email: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    first_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_name') }})
    last_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_name') }})
    username: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('username') }})
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    changed_on: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('changed_on'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    created_on: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_on'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    fail_login_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fail_login_count') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    last_login: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_login'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    login_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('login_count') }})
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    
