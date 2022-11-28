from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_EVENT_TYPE_SERVERS = [
	"https://events.twilio.com",
]


@dataclass
class FetchEventTypePathParams:
    type: str = field(metadata={'path_param': { 'field_name': 'Type', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchEventTypeSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchEventTypeRequest:
    path_params: FetchEventTypePathParams = field()
    security: FetchEventTypeSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchEventTypeResponse:
    content_type: str = field()
    status_code: int = field()
    events_v1_event_type: Optional[shared.EventsV1EventType] = field(default=None)
    
