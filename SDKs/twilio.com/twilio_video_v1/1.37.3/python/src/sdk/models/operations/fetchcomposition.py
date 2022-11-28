from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_COMPOSITION_SERVERS = [
	"https://video.twilio.com",
]


@dataclass
class FetchCompositionPathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchCompositionSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchCompositionRequest:
    path_params: FetchCompositionPathParams = field()
    security: FetchCompositionSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchCompositionResponse:
    content_type: str = field()
    status_code: int = field()
    video_v1_composition: Optional[shared.VideoV1Composition] = field(default=None)
    
