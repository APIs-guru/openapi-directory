from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_EVENT_TYPE_SERVERS = [
	"https://events.twilio.com",
]


@dataclass
class FetchEventTypePathParams:
    type: str = field(default=None, metadata={'path_param': { 'field_name': 'Type', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchEventTypeSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchEventTypeRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchEventTypePathParams = field(default=None)
    security: FetchEventTypeSecurity = field(default=None)
    

@dataclass
class FetchEventTypeResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    events_v1_event_type: Optional[shared.EventsV1EventType] = field(default=None)
    
