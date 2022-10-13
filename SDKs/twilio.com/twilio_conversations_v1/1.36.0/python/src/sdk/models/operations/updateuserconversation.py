from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from sdk.models import shared
UPDATE_USER_CONVERSATION_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclass
class UpdateUserConversationPathParams:
    conversation_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ConversationSid', 'style': 'simple', 'explode': False }})
    user_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'UserSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateUserConversationRequestBodyUpdateUserConversationRequest:
    last_read_message_index: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'LastReadMessageIndex' }})
    last_read_timestamp: Optional[datetime] = field(default=None, metadata={'form': { 'field_name': 'LastReadTimestamp' }})
    notification_level: Optional[shared.UserConversationEnumNotificationLevelEnum] = field(default=None, metadata={'form': { 'field_name': 'NotificationLevel' }})
    

@dataclass
class UpdateUserConversationSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateUserConversationRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateUserConversationPathParams = field(default=None)
    request: Optional[UpdateUserConversationRequestBodyUpdateUserConversationRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateUserConversationSecurity = field(default=None)
    

@dataclass
class UpdateUserConversationResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    conversations_v1_user_user_conversation: Optional[shared.ConversationsV1UserUserConversation] = field(default=None)
    
