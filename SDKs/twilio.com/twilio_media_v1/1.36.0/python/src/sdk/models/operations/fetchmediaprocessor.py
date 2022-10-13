from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_MEDIA_PROCESSOR_SERVERS = [
	"https://media.twilio.com",
]


@dataclass
class FetchMediaProcessorPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchMediaProcessorSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchMediaProcessorRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchMediaProcessorPathParams = field(default=None)
    security: FetchMediaProcessorSecurity = field(default=None)
    

@dataclass
class FetchMediaProcessorResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    media_v1_media_processor: Optional[shared.MediaV1MediaProcessor] = field(default=None)
    
