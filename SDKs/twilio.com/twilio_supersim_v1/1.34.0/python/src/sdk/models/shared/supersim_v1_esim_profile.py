from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass_json
@dataclass
class SupersimV1EsimProfile:
    account_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_sid' }})
    date_created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    date_updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_updated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    eid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eid' }})
    error_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error_code' }})
    error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error_message' }})
    iccid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iccid' }})
    sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sid' }})
    sim_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sim_sid' }})
    smdp_plus_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'smdp_plus_address' }})
    status: Optional[shared.EsimProfileEnumStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
