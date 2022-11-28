from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class LinkTokenCreateRequestUser:
    r"""LinkTokenCreateRequestUser
    An object specifying information about the end user who will be linking their account.
    """
    
    client_user_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_user_id') }})
    date_of_birth: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date_of_birth'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    email_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email_address') }})
    email_address_verified_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email_address_verified_time'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    legal_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('legal_name') }})
    phone_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phone_number') }})
    phone_number_verified_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phone_number_verified_time'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    ssn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ssn') }})
    
