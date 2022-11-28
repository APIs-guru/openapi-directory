from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_BUILD_STATUS_SERVERS = [
	"https://serverless.twilio.com",
]


@dataclass
class FetchBuildStatusPathParams:
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchBuildStatusSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchBuildStatusRequest:
    path_params: FetchBuildStatusPathParams = field()
    security: FetchBuildStatusSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchBuildStatusResponse:
    content_type: str = field()
    status_code: int = field()
    serverless_v1_service_build_build_status: Optional[shared.ServerlessV1ServiceBuildBuildStatus] = field(default=None)
    
