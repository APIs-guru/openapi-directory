from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_COMPOSITION_HOOK_SERVERS = [
	"https://video.twilio.com",
]


@dataclass
class FetchCompositionHookPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchCompositionHookSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchCompositionHookRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchCompositionHookPathParams = field(default=None)
    security: FetchCompositionHookSecurity = field(default=None)
    

@dataclass
class FetchCompositionHookResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    video_v1_composition_hook: Optional[shared.VideoV1CompositionHook] = field(default=None)
    
