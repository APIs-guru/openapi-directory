from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
UPDATE_SINK_SERVERS = [
	"https://events.twilio.com",
]


@dataclass
class UpdateSinkPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateSinkRequestBodyUpdateSinkRequest:
    description: str = field(default=None, metadata={'form': { 'field_name': 'Description' }})
    

@dataclass
class UpdateSinkSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateSinkRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateSinkPathParams = field(default=None)
    request: Optional[UpdateSinkRequestBodyUpdateSinkRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateSinkSecurity = field(default=None)
    

@dataclass
class UpdateSinkResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    events_v1_sink: Optional[shared.EventsV1Sink] = field(default=None)
    
