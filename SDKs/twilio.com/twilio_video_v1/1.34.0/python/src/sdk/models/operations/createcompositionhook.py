from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_COMPOSITION_HOOK_SERVERS = [
	"https://video.twilio.com",
]


@dataclass
class CreateCompositionHookSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateCompositionHookRequest:
    server_url: Optional[str] = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateCompositionHookSecurity = field(default=None)
    

@dataclass
class CreateCompositionHookResponses:
    video_v1_composition_hook: Optional[shared.VideoV1CompositionHook] = field(default=None)
    

@dataclass
class CreateCompositionHookResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, CreateCompositionHookResponses]] = field(default=None)
    status_code: int = field(default=None)
    
