from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from sdk.models import shared
UPDATE_SERVICE_USER_CONVERSATION_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclass
class UpdateServiceUserConversationPathParams:
    chat_service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ChatServiceSid', 'style': 'simple', 'explode': False }})
    conversation_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ConversationSid', 'style': 'simple', 'explode': False }})
    user_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'UserSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateServiceUserConversationRequestBodyUpdateServiceUserConversationRequest:
    last_read_message_index: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'LastReadMessageIndex' }})
    last_read_timestamp: Optional[datetime] = field(default=None, metadata={'form': { 'field_name': 'LastReadTimestamp' }})
    notification_level: Optional[shared.ServiceUserConversationEnumNotificationLevelEnum] = field(default=None, metadata={'form': { 'field_name': 'NotificationLevel' }})
    

@dataclass
class UpdateServiceUserConversationSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateServiceUserConversationRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateServiceUserConversationPathParams = field(default=None)
    request: Optional[UpdateServiceUserConversationRequestBodyUpdateServiceUserConversationRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateServiceUserConversationSecurity = field(default=None)
    

@dataclass
class UpdateServiceUserConversationResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    conversations_v1_service_service_user_service_user_conversation: Optional[shared.ConversationsV1ServiceServiceUserServiceUserConversation] = field(default=None)
    
