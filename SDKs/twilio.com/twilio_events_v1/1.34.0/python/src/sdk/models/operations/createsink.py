from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_SINK_SERVERS = [
	"https://events.twilio.com",
]


@dataclass
class CreateSinkSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateSinkRequest:
    server_url: Optional[str] = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateSinkSecurity = field(default=None)
    

@dataclass
class CreateSinkResponses:
    events_v1_sink: Optional[shared.EventsV1Sink] = field(default=None)
    

@dataclass
class CreateSinkResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, CreateSinkResponses]] = field(default=None)
    status_code: int = field(default=None)
    
