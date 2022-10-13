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
class UpdateServiceNotificationSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateServiceNotificationRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateServiceNotificationPathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateServiceNotificationSecurity = field(default=None)
    

@dataclass
class UpdateServiceNotificationResponses:
    conversations_v1_service_service_configuration_service_notification: Optional[shared.ConversationsV1ServiceServiceConfigurationServiceNotification] = field(default=None)
    

@dataclass
class UpdateServiceNotificationResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, UpdateServiceNotificationResponses]] = field(default=None)
    status_code: int = field(default=None)
    
