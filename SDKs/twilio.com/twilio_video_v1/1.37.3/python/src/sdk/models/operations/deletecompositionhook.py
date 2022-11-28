from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


DELETE_COMPOSITION_HOOK_SERVERS = [
	"https://video.twilio.com",
]


@dataclass
class DeleteCompositionHookPathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteCompositionHookSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteCompositionHookRequest:
    path_params: DeleteCompositionHookPathParams = field()
    security: DeleteCompositionHookSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class DeleteCompositionHookResponse:
    content_type: str = field()
    status_code: int = field()
    
