from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_LOG_SERVERS = [
	"https://serverless.twilio.com",
]


@dataclass
class FetchLogPathParams:
    environment_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'EnvironmentSid', 'style': 'simple', 'explode': False }})
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchLogSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchLogRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchLogPathParams = field(default=None)
    security: FetchLogSecurity = field(default=None)
    

@dataclass
class FetchLogResponses:
    serverless_v1_service_environment_log: Optional[shared.ServerlessV1ServiceEnvironmentLog] = field(default=None)
    

@dataclass
class FetchLogResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, FetchLogResponses]] = field(default=None)
    status_code: int = field(default=None)
    
