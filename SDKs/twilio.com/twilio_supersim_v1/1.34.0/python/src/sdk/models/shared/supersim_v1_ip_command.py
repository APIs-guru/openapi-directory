from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass_json
@dataclass
class SupersimV1IPCommand:
    account_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_sid' }})
    date_created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    date_updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_updated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    device_ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'device_ip' }})
    device_port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'device_port' }})
    direction: Optional[shared.IPCommandEnumDirectionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'direction' }})
    payload: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payload' }})
    payload_type: Optional[shared.IPCommandEnumPayloadTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payload_type' }})
    sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sid' }})
    sim_iccid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sim_iccid' }})
    sim_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sim_sid' }})
    status: Optional[shared.IPCommandEnumStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
