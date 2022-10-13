from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_COMPOSITION_SERVERS = [
	"https://video.twilio.com",
]


@dataclass
class CreateCompositionSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateCompositionRequest:
    server_url: Optional[str] = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateCompositionSecurity = field(default=None)
    

@dataclass
class CreateCompositionResponses:
    video_v1_composition: Optional[shared.VideoV1Composition] = field(default=None)
    

@dataclass
class CreateCompositionResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, CreateCompositionResponses]] = field(default=None)
    status_code: int = field(default=None)
    
