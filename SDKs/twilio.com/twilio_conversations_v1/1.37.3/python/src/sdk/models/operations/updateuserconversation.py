from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from sdk.models import shared


UPDATE_USER_CONVERSATION_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclass
class UpdateUserConversationPathParams:
    conversation_sid: str = field(metadata={'path_param': { 'field_name': 'ConversationSid', 'style': 'simple', 'explode': False }})
    user_sid: str = field(metadata={'path_param': { 'field_name': 'UserSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateUserConversationUpdateUserConversationRequest:
    last_read_message_index: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'LastReadMessageIndex' }})
    last_read_timestamp: Optional[datetime] = field(default=None, metadata={'form': { 'field_name': 'LastReadTimestamp' }})
    notification_level: Optional[shared.UserConversationEnumNotificationLevelEnum] = field(default=None, metadata={'form': { 'field_name': 'NotificationLevel' }})
    

@dataclass
class UpdateUserConversationSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateUserConversationRequest:
    path_params: UpdateUserConversationPathParams = field()
    security: UpdateUserConversationSecurity = field()
    request: Optional[UpdateUserConversationUpdateUserConversationRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class UpdateUserConversationResponse:
    content_type: str = field()
    status_code: int = field()
    conversations_v1_user_user_conversation: Optional[shared.ConversationsV1UserUserConversation] = field(default=None)
    
