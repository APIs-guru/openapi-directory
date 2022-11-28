from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_SINK_SERVERS = [
	"https://events.twilio.com",
]


@dataclass
class FetchSinkPathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchSinkSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchSinkRequest:
    path_params: FetchSinkPathParams = field()
    security: FetchSinkSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchSinkResponse:
    content_type: str = field()
    status_code: int = field()
    events_v1_sink: Optional[shared.EventsV1Sink] = field(default=None)
    
