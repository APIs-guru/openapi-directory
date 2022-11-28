from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_LOG_SERVERS = [
	"https://serverless.twilio.com",
]


@dataclass
class FetchLogPathParams:
    environment_sid: str = field(metadata={'path_param': { 'field_name': 'EnvironmentSid', 'style': 'simple', 'explode': False }})
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchLogSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchLogRequest:
    path_params: FetchLogPathParams = field()
    security: FetchLogSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchLogResponse:
    content_type: str = field()
    status_code: int = field()
    serverless_v1_service_environment_log: Optional[shared.ServerlessV1ServiceEnvironmentLog] = field(default=None)
    
