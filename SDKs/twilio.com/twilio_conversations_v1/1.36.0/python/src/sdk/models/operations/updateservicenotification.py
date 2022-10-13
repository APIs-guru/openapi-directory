from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
UPDATE_SERVICE_NOTIFICATION_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclass
class UpdateServiceNotificationPathParams:
    chat_service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ChatServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateServiceNotificationRequestBodyUpdateServiceNotificationRequest:
    added_to_conversation_enabled: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'AddedToConversation.Enabled' }})
    added_to_conversation_sound: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'AddedToConversation.Sound' }})
    added_to_conversation_template: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'AddedToConversation.Template' }})
    log_enabled: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'LogEnabled' }})
    new_message_badge_count_enabled: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'NewMessage.BadgeCountEnabled' }})
    new_message_enabled: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'NewMessage.Enabled' }})
    new_message_sound: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'NewMessage.Sound' }})
    new_message_template: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'NewMessage.Template' }})
    new_message_with_media_enabled: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'NewMessage.WithMedia.Enabled' }})
    new_message_with_media_template: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'NewMessage.WithMedia.Template' }})
    removed_from_conversation_enabled: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'RemovedFromConversation.Enabled' }})
    removed_from_conversation_sound: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'RemovedFromConversation.Sound' }})
    removed_from_conversation_template: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'RemovedFromConversation.Template' }})
    

@dataclass
class UpdateServiceNotificationSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateServiceNotificationRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateServiceNotificationPathParams = field(default=None)
    request: Optional[UpdateServiceNotificationRequestBodyUpdateServiceNotificationRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateServiceNotificationSecurity = field(default=None)
    

@dataclass
class UpdateServiceNotificationResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    conversations_v1_service_service_configuration_service_notification: Optional[shared.ConversationsV1ServiceServiceConfigurationServiceNotification] = field(default=None)
    
