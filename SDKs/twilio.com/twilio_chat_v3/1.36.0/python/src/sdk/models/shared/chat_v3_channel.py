from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import channel_enum_channel_type_enum


@dataclass_json
@dataclass
class ChatV3Channel:
    account_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_sid' }})
    attributes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributes' }})
    created_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_by' }})
    date_created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    date_updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_updated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    friendly_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'friendly_name' }})
    members_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'members_count' }})
    messages_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'messages_count' }})
    messaging_service_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'messaging_service_sid' }})
    service_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'service_sid' }})
    sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sid' }})
    type: Optional[channel_enum_channel_type_enum.ChannelEnumChannelTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    unique_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unique_name' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
