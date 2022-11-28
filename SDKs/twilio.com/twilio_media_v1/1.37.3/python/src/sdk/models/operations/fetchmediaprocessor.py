from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_MEDIA_PROCESSOR_SERVERS = [
	"https://media.twilio.com",
]


@dataclass
class FetchMediaProcessorPathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchMediaProcessorSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchMediaProcessorRequest:
    path_params: FetchMediaProcessorPathParams = field()
    security: FetchMediaProcessorSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchMediaProcessorResponse:
    content_type: str = field()
    status_code: int = field()
    media_v1_media_processor: Optional[shared.MediaV1MediaProcessor] = field(default=None)
    
