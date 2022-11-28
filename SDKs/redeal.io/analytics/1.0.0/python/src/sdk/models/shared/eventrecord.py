from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class EventRecord:
    agent: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('agent') }})
    browsertype: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('browsertype') }})
    channel: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('channel') }})
    click: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('click') }})
    clicks: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('clicks') }})
    code: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    company: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('company') }})
    contact: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('contact') }})
    cost: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cost') }})
    costcurrency: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('costcurrency') }})
    currency: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    deal: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deal') }})
    deal_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deal name') }})
    delay: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('delay') }})
    denyreason: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('denyreason') }})
    device: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('device') }})
    devicetype: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('devicetype') }})
    email: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    emailaddrsha256: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('emailaddrsha256') }})
    flow: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('flow') }})
    flowstep: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('flowstep') }})
    flowtype: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('flowtype') }})
    impression: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('impression') }})
    ip: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip') }})
    latitude: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('latitude') }})
    longitude: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('longitude') }})
    optin: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('optin') }})
    os: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('os') }})
    resolution: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resolution') }})
    revenue: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('revenue') }})
    role: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('role') }})
    session: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('session') }})
    site: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('site') }})
    site_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('site name') }})
    timestamp: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    user: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    userlanguage: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('userlanguage') }})
    
