from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import log_enum_level_enum


@dataclass_json
@dataclass
class ServerlessV1ServiceEnvironmentLog:
    account_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_sid' }})
    build_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'build_sid' }})
    date_created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    deployment_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deployment_sid' }})
    environment_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environment_sid' }})
    function_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'function_sid' }})
    level: Optional[log_enum_level_enum.LogEnumLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'level' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    request_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_sid' }})
    service_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'service_sid' }})
    sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sid' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
