from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class MonitorV1AlertInstanceRequestMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"


@dataclass_json
@dataclass
class MonitorV1AlertInstance:
    account_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_sid' }})
    alert_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alert_text' }})
    api_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'api_version' }})
    date_created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    date_generated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_generated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    date_updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_updated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    error_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error_code' }})
    log_level: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'log_level' }})
    more_info: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'more_info' }})
    request_headers: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_headers' }})
    request_method: Optional[MonitorV1AlertInstanceRequestMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_method' }})
    request_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_url' }})
    request_variables: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_variables' }})
    resource_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource_sid' }})
    response_body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'response_body' }})
    response_headers: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'response_headers' }})
    service_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'service_sid' }})
    sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sid' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
