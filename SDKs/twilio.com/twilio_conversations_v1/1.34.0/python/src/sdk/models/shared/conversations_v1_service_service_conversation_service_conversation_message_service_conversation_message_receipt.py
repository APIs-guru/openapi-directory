from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass_json
@dataclass
class ConversationsV1ServiceServiceConversationServiceConversationMessageServiceConversationMessageReceipt:
    account_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_sid' }})
    channel_message_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'channel_message_sid' }})
    chat_service_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'chat_service_sid' }})
    conversation_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conversation_sid' }})
    date_created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    date_updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_updated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    error_code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error_code' }})
    message_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message_sid' }})
    participant_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'participant_sid' }})
    sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sid' }})
    status: Optional[shared.ServiceConversationMessageReceiptEnumDeliveryStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
