from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ProxyV1ServiceShortCodeCapabilities:
    fax: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fax' }})
    mms: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mms' }})
    sms: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sms' }})
    voice: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'voice' }})
    

@dataclass_json
@dataclass
class ProxyV1ServiceShortCode:
    account_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_sid' }})
    capabilities: Optional[ProxyV1ServiceShortCodeCapabilities] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'capabilities' }})
    date_created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    date_updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_updated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    is_reserved: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'is_reserved' }})
    iso_country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iso_country' }})
    service_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'service_sid' }})
    short_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'short_code' }})
    sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sid' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
