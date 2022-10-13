from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_COMPOSITION_SERVERS = [
	"https://video.twilio.com",
]


@dataclass
class FetchCompositionPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchCompositionSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchCompositionRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchCompositionPathParams = field(default=None)
    security: FetchCompositionSecurity = field(default=None)
    

@dataclass
class FetchCompositionResponses:
    video_v1_composition: Optional[shared.VideoV1Composition] = field(default=None)
    

@dataclass
class FetchCompositionResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, FetchCompositionResponses]] = field(default=None)
    status_code: int = field(default=None)
    
