from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_SERVICE_NOTIFICATION_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclass
class FetchServiceNotificationPathParams:
    chat_service_sid: str = field(metadata={'path_param': { 'field_name': 'ChatServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchServiceNotificationSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchServiceNotificationRequest:
    path_params: FetchServiceNotificationPathParams = field()
    security: FetchServiceNotificationSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchServiceNotificationResponse:
    content_type: str = field()
    status_code: int = field()
    conversations_v1_service_service_configuration_service_notification: Optional[shared.ConversationsV1ServiceServiceConfigurationServiceNotification] = field(default=None)
    
