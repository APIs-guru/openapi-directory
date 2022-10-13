from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from . import verification_check_enum_channel_enum


@dataclass_json
@dataclass
class VerifyV2ServiceVerificationCheck:
    account_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_sid' }})
    amount: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount' }})
    channel: Optional[verification_check_enum_channel_enum.VerificationCheckEnumChannelEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'channel' }})
    date_created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    date_updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_updated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    payee: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payee' }})
    service_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'service_sid' }})
    sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sid' }})
    sna_attempts_error_codes: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sna_attempts_error_codes' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    to: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'to' }})
    valid: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'valid' }})
    
