from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass_json
@dataclass
class VerifyV2ServiceVerification:
    account_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_sid' }})
    amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount' }})
    channel: Optional[shared.VerificationEnumChannelEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'channel' }})
    date_created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    date_updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_updated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    lookup: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lookup' }})
    payee: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payee' }})
    send_code_attempts: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'send_code_attempts' }})
    service_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'service_sid' }})
    sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sid' }})
    sna: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sna' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    to: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'to' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    valid: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'valid' }})
    
