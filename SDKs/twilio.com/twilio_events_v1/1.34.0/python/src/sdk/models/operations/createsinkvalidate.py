from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_SINK_VALIDATE_SERVERS = [
	"https://events.twilio.com",
]


@dataclass
class CreateSinkValidatePathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateSinkValidateSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateSinkValidateRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateSinkValidatePathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateSinkValidateSecurity = field(default=None)
    

@dataclass
class CreateSinkValidateResponses:
    events_v1_sink_sink_validate: Optional[shared.EventsV1SinkSinkValidate] = field(default=None)
    

@dataclass
class CreateSinkValidateResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, CreateSinkValidateResponses]] = field(default=None)
    status_code: int = field(default=None)
    
