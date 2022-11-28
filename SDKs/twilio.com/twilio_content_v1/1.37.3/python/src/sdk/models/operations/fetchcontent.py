from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_CONTENT_SERVERS = [
	"https://content.twilio.com",
]


@dataclass
class FetchContentPathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchContentSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchContentRequest:
    path_params: FetchContentPathParams = field()
    security: FetchContentSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchContentResponse:
    content_type: str = field()
    status_code: int = field()
    content_v1_content: Optional[shared.ContentV1Content] = field(default=None)
    
