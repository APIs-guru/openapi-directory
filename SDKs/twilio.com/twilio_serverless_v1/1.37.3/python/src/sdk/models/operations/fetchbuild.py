from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_BUILD_SERVERS = [
	"https://serverless.twilio.com",
]


@dataclass
class FetchBuildPathParams:
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchBuildSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchBuildRequest:
    path_params: FetchBuildPathParams = field()
    security: FetchBuildSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchBuildResponse:
    content_type: str = field()
    status_code: int = field()
    serverless_v1_service_build: Optional[shared.ServerlessV1ServiceBuild] = field(default=None)
    
