from dataclasses import dataclass, field
from typing import Optional
DELETE_COMPOSITION_SERVERS = [
	"https://video.twilio.com",
]


@dataclass
class DeleteCompositionPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteCompositionSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteCompositionRequest:
    server_url: Optional[str] = field(default=None)
    path_params: DeleteCompositionPathParams = field(default=None)
    security: DeleteCompositionSecurity = field(default=None)
    

@dataclass
class DeleteCompositionResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
