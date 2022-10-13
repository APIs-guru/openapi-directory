from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ChatV1Service:
    account_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_sid' }})
    consumption_report_interval: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'consumption_report_interval' }})
    date_created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    date_updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_updated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    default_channel_creator_role_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'default_channel_creator_role_sid' }})
    default_channel_role_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'default_channel_role_sid' }})
    default_service_role_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'default_service_role_sid' }})
    friendly_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'friendly_name' }})
    limits: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'limits' }})
    links: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'links' }})
    notifications: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notifications' }})
    post_webhook_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'post_webhook_url' }})
    pre_webhook_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pre_webhook_url' }})
    reachability_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reachability_enabled' }})
    read_status_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'read_status_enabled' }})
    sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sid' }})
    typing_indicator_timeout: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'typing_indicator_timeout' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    webhook_filters: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webhook_filters' }})
    webhook_method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webhook_method' }})
    webhooks: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webhooks' }})
    
