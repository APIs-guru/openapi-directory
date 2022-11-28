from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_ENVIRONMENT_SERVERS = [
	"https://serverless.twilio.com",
]


@dataclass
class FetchEnvironmentPathParams:
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchEnvironmentSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchEnvironmentRequest:
    path_params: FetchEnvironmentPathParams = field()
    security: FetchEnvironmentSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchEnvironmentResponse:
    content_type: str = field()
    status_code: int = field()
    serverless_v1_service_environment: Optional[shared.ServerlessV1ServiceEnvironment] = field(default=None)
    
