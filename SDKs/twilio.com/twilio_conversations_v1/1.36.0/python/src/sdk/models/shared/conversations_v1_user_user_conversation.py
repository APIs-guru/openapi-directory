from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from . import user_conversation_enum_state_enum
from . import user_conversation_enum_notification_level_enum


@dataclass_json
@dataclass
class ConversationsV1UserUserConversation:
    account_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_sid' }})
    attributes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributes' }})
    chat_service_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'chat_service_sid' }})
    conversation_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conversation_sid' }})
    conversation_state: Optional[user_conversation_enum_state_enum.UserConversationEnumStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conversation_state' }})
    created_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_by' }})
    date_created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    date_updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_updated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    friendly_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'friendly_name' }})
    last_read_message_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_read_message_index' }})
    links: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'links' }})
    notification_level: Optional[user_conversation_enum_notification_level_enum.UserConversationEnumNotificationLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notification_level' }})
    participant_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'participant_sid' }})
    timers: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timers' }})
    unique_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unique_name' }})
    unread_messages_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unread_messages_count' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    user_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user_sid' }})
    
