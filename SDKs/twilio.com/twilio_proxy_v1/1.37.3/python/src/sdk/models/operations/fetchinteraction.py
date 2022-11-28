from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_INTERACTION_SERVERS = [
	"https://proxy.twilio.com",
]


@dataclass
class FetchInteractionPathParams:
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    session_sid: str = field(metadata={'path_param': { 'field_name': 'SessionSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchInteractionSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchInteractionRequest:
    path_params: FetchInteractionPathParams = field()
    security: FetchInteractionSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchInteractionResponse:
    content_type: str = field()
    status_code: int = field()
    proxy_v1_service_session_interaction: Optional[shared.ProxyV1ServiceSessionInteraction] = field(default=None)
    
