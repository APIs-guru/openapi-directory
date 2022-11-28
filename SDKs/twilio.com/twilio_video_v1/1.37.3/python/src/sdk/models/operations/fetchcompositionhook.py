from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_COMPOSITION_HOOK_SERVERS = [
	"https://video.twilio.com",
]


@dataclass
class FetchCompositionHookPathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchCompositionHookSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchCompositionHookRequest:
    path_params: FetchCompositionHookPathParams = field()
    security: FetchCompositionHookSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchCompositionHookResponse:
    content_type: str = field()
    status_code: int = field()
    video_v1_composition_hook: Optional[shared.VideoV1CompositionHook] = field(default=None)
    
