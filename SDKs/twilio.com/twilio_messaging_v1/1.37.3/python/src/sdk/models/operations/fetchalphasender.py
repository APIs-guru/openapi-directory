from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_ALPHA_SENDER_SERVERS = [
	"https://messaging.twilio.com",
]


@dataclass
class FetchAlphaSenderPathParams:
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchAlphaSenderSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchAlphaSenderRequest:
    path_params: FetchAlphaSenderPathParams = field()
    security: FetchAlphaSenderSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchAlphaSenderResponse:
    content_type: str = field()
    status_code: int = field()
    messaging_v1_service_alpha_sender: Optional[shared.MessagingV1ServiceAlphaSender] = field(default=None)
    
