from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class EventRecord:
    agent: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'agent' }})
    browsertype: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'browsertype' }})
    channel: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'channel' }})
    click: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'click' }})
    clicks: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clicks' }})
    code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    company: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'company' }})
    contact: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contact' }})
    cost: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cost' }})
    costcurrency: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'costcurrency' }})
    currency: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currency' }})
    deal: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deal' }})
    deal_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deal name' }})
    delay: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'delay' }})
    denyreason: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'denyreason' }})
    device: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'device' }})
    devicetype: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'devicetype' }})
    email: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    emailaddrsha256: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'emailaddrsha256' }})
    flow: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'flow' }})
    flowstep: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'flowstep' }})
    flowtype: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'flowtype' }})
    impression: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'impression' }})
    ip: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ip' }})
    latitude: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latitude' }})
    longitude: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'longitude' }})
    optin: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'optin' }})
    os: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'os' }})
    resolution: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resolution' }})
    revenue: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'revenue' }})
    role: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'role' }})
    session: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'session' }})
    site: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'site' }})
    site_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'site name' }})
    timestamp: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    user: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user' }})
    userlanguage: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userlanguage' }})
    
