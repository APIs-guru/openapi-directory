from dataclasses import dataclass, field
from typing import Optional
DELETE_COMPOSITION_HOOK_SERVERS = [
	"https://video.twilio.com",
]


@dataclass
class DeleteCompositionHookPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteCompositionHookSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteCompositionHookRequest:
    server_url: Optional[str] = field(default=None)
    path_params: DeleteCompositionHookPathParams = field(default=None)
    security: DeleteCompositionHookSecurity = field(default=None)
    

@dataclass
class DeleteCompositionHookResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
