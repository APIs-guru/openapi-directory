from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_STREAM_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class CreateStreamPathParams:
    account_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    call_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'CallSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateStreamSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateStreamRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateStreamPathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateStreamSecurity = field(default=None)
    

@dataclass
class CreateStreamResponses:
    api_v2010_account_call_stream: Optional[shared.APIV2010AccountCallStream] = field(default=None)
    

@dataclass
class CreateStreamResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, CreateStreamResponses]] = field(default=None)
    status_code: int = field(default=None)
    
