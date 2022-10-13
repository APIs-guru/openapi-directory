from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_ALPHA_SENDER_SERVERS = [
	"https://messaging.twilio.com",
]


@dataclass
class CreateAlphaSenderPathParams:
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateAlphaSenderSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateAlphaSenderRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateAlphaSenderPathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateAlphaSenderSecurity = field(default=None)
    

@dataclass
class CreateAlphaSenderResponses:
    messaging_v1_service_alpha_sender: Optional[shared.MessagingV1ServiceAlphaSender] = field(default=None)
    

@dataclass
class CreateAlphaSenderResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, CreateAlphaSenderResponses]] = field(default=None)
    status_code: int = field(default=None)
    
