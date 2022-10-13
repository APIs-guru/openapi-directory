from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass_json
@dataclass
class VerifyV2VerificationAttempt:
    account_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_sid' }})
    channel: Optional[shared.VerificationAttemptEnumChannelsEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'channel' }})
    channel_data: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'channel_data' }})
    conversion_status: Optional[shared.VerificationAttemptEnumConversionStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conversion_status' }})
    date_created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    date_updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_updated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    price: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price' }})
    service_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'service_sid' }})
    sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sid' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    verification_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'verification_sid' }})
    
