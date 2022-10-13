from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_MEDIA_PROCESSOR_SERVERS = [
	"https://media.twilio.com",
]


@dataclass
class CreateMediaProcessorSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateMediaProcessorRequest:
    server_url: Optional[str] = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateMediaProcessorSecurity = field(default=None)
    

@dataclass
class CreateMediaProcessorResponses:
    media_v1_media_processor: Optional[shared.MediaV1MediaProcessor] = field(default=None)
    

@dataclass
class CreateMediaProcessorResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, CreateMediaProcessorResponses]] = field(default=None)
    status_code: int = field(default=None)
    
