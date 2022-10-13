from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_NOTIFICATION_SERVERS = [
	"https://notify.twilio.com",
]


@dataclass
class CreateNotificationPathParams:
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateNotificationSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateNotificationRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateNotificationPathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateNotificationSecurity = field(default=None)
    

@dataclass
class CreateNotificationResponses:
    notify_v1_service_notification: Optional[shared.NotifyV1ServiceNotification] = field(default=None)
    

@dataclass
class CreateNotificationResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, CreateNotificationResponses]] = field(default=None)
    status_code: int = field(default=None)
    
