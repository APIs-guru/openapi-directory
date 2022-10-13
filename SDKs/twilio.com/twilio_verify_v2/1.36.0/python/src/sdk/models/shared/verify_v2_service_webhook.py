from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import webhook_enum_status_enum
from . import webhook_enum_version_enum
from . import webhook_enum_methods_enum


@dataclass_json
@dataclass
class VerifyV2ServiceWebhook:
    account_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_sid' }})
    date_created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    date_updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_updated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    event_types: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'event_types' }})
    friendly_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'friendly_name' }})
    service_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'service_sid' }})
    sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sid' }})
    status: Optional[webhook_enum_status_enum.WebhookEnumStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    version: Optional[webhook_enum_version_enum.WebhookEnumVersionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    webhook_method: Optional[webhook_enum_methods_enum.WebhookEnumMethodsEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webhook_method' }})
    webhook_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webhook_url' }})
    
