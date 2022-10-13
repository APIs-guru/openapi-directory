from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_BUILD_STATUS_SERVERS = [
	"https://serverless.twilio.com",
]


@dataclass
class FetchBuildStatusPathParams:
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchBuildStatusSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchBuildStatusRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchBuildStatusPathParams = field(default=None)
    security: FetchBuildStatusSecurity = field(default=None)
    

@dataclass
class FetchBuildStatusResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    serverless_v1_service_build_build_status: Optional[shared.ServerlessV1ServiceBuildBuildStatus] = field(default=None)
    
