from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_NOTIFICATION_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class FetchNotificationPathParams:
    account_sid: str = field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchNotificationSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchNotificationRequest:
    path_params: FetchNotificationPathParams = field()
    security: FetchNotificationSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchNotificationResponse:
    content_type: str = field()
    status_code: int = field()
    api_v2010_account_notification_instance: Optional[shared.APIV2010AccountNotificationInstance] = field(default=None)
    
