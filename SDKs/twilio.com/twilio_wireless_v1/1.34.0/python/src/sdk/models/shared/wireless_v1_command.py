from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass_json
@dataclass
class WirelessV1Command:
    account_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_sid' }})
    command: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'command' }})
    command_mode: Optional[shared.CommandEnumCommandModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'command_mode' }})
    date_created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    date_updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_updated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    delivery_receipt_requested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'delivery_receipt_requested' }})
    direction: Optional[shared.CommandEnumDirectionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'direction' }})
    sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sid' }})
    sim_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sim_sid' }})
    status: Optional[shared.CommandEnumStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    transport: Optional[shared.CommandEnumTransportEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transport' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
