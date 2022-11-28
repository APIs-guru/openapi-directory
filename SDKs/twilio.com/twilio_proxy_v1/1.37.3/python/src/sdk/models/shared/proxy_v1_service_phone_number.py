from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ProxyV1ServicePhoneNumberCapabilities:
    r"""ProxyV1ServicePhoneNumberCapabilities
    The capabilities of the phone number
    """
    
    fax: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fax') }})
    mms: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mms') }})
    sms: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sms') }})
    voice: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('voice') }})
    

@dataclass_json
@dataclass
class ProxyV1ServicePhoneNumber:
    account_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account_sid') }})
    capabilities: Optional[ProxyV1ServicePhoneNumberCapabilities] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('capabilities') }})
    date_created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date_created'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    date_updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date_updated'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    friendly_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('friendly_name') }})
    in_use: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('in_use') }})
    is_reserved: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_reserved') }})
    iso_country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iso_country') }})
    phone_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phone_number') }})
    service_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('service_sid') }})
    sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sid') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
