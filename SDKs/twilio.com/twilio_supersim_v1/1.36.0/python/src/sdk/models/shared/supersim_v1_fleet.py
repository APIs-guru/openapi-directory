from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import fleet_enum_data_metering_enum

class SupersimV1FleetIPCommandsMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"

class SupersimV1FleetSmsCommandsMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"


@dataclass_json
@dataclass
class SupersimV1Fleet:
    account_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_sid' }})
    data_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data_enabled' }})
    data_limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data_limit' }})
    data_metering: Optional[fleet_enum_data_metering_enum.FleetEnumDataMeteringEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data_metering' }})
    date_created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    date_updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_updated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    ip_commands_method: Optional[SupersimV1FleetIPCommandsMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ip_commands_method' }})
    ip_commands_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ip_commands_url' }})
    network_access_profile_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'network_access_profile_sid' }})
    sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sid' }})
    sms_commands_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sms_commands_enabled' }})
    sms_commands_method: Optional[SupersimV1FleetSmsCommandsMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sms_commands_method' }})
    sms_commands_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sms_commands_url' }})
    unique_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unique_name' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
