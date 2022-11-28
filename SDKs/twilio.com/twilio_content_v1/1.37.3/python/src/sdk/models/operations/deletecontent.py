from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


DELETE_CONTENT_SERVERS = [
	"https://content.twilio.com",
]


@dataclass
class DeleteContentPathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteContentSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteContentRequest:
    path_params: DeleteContentPathParams = field()
    security: DeleteContentSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class DeleteContentResponse:
    content_type: str = field()
    status_code: int = field()
    
