from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


DELETE_COMPOSITION_SERVERS = [
	"https://video.twilio.com",
]


@dataclass
class DeleteCompositionPathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteCompositionSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteCompositionRequest:
    path_params: DeleteCompositionPathParams = field()
    security: DeleteCompositionSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class DeleteCompositionResponse:
    content_type: str = field()
    status_code: int = field()
    
