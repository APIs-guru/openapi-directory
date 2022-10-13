from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_SINK_TEST_SERVERS = [
	"https://events.twilio.com",
]


@dataclass
class CreateSinkTestPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateSinkTestSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateSinkTestRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateSinkTestPathParams = field(default=None)
    security: CreateSinkTestSecurity = field(default=None)
    

@dataclass
class CreateSinkTestResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    events_v1_sink_sink_test: Optional[shared.EventsV1SinkSinkTest] = field(default=None)
    
