from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_DEFAULTS_SERVERS = [
	"https://autopilot.twilio.com",
]


@dataclass
class FetchDefaultsPathParams:
    assistant_sid: str = field(metadata={'path_param': { 'field_name': 'AssistantSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchDefaultsSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchDefaultsRequest:
    path_params: FetchDefaultsPathParams = field()
    security: FetchDefaultsSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchDefaultsResponse:
    content_type: str = field()
    status_code: int = field()
    autopilot_v1_assistant_defaults: Optional[shared.AutopilotV1AssistantDefaults] = field(default=None)
    
