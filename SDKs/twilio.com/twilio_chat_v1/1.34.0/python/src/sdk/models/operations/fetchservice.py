from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_SERVICE_SERVERS = [
	"https://chat.twilio.com",
]


@dataclass
class FetchServicePathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchServiceSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchServiceRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchServicePathParams = field(default=None)
    security: FetchServiceSecurity = field(default=None)
    

@dataclass
class FetchServiceResponses:
    chat_v1_service: Optional[shared.ChatV1Service] = field(default=None)
    

@dataclass
class FetchServiceResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, FetchServiceResponses]] = field(default=None)
    status_code: int = field(default=None)
    
