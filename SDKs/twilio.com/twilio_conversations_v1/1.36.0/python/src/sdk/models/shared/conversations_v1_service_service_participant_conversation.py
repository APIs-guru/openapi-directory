from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from . import service_participant_conversation_enum_state_enum


@dataclass_json
@dataclass
class ConversationsV1ServiceServiceParticipantConversation:
    account_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_sid' }})
    chat_service_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'chat_service_sid' }})
    conversation_attributes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conversation_attributes' }})
    conversation_created_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conversation_created_by' }})
    conversation_date_created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conversation_date_created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    conversation_date_updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conversation_date_updated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    conversation_friendly_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conversation_friendly_name' }})
    conversation_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conversation_sid' }})
    conversation_state: Optional[service_participant_conversation_enum_state_enum.ServiceParticipantConversationEnumStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conversation_state' }})
    conversation_timers: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conversation_timers' }})
    conversation_unique_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conversation_unique_name' }})
    links: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'links' }})
    participant_identity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'participant_identity' }})
    participant_messaging_binding: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'participant_messaging_binding' }})
    participant_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'participant_sid' }})
    participant_user_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'participant_user_sid' }})
    
