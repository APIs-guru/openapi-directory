from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass_json
@dataclass
class NotifyV1ServiceNotification:
    account_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_sid' }})
    action: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    alexa: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alexa' }})
    apn: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apn' }})
    body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'body' }})
    data: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    date_created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    facebook_messenger: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'facebook_messenger' }})
    fcm: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fcm' }})
    gcm: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gcm' }})
    identities: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'identities' }})
    priority: Optional[shared.NotificationEnumPriorityEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'priority' }})
    segments: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'segments' }})
    service_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'service_sid' }})
    sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sid' }})
    sms: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sms' }})
    sound: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sound' }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    ttl: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ttl' }})
    
