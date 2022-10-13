from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_DEPLOYMENT_SERVERS = [
	"https://serverless.twilio.com",
]


@dataclass
class FetchDeploymentPathParams:
    environment_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'EnvironmentSid', 'style': 'simple', 'explode': False }})
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchDeploymentSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchDeploymentRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchDeploymentPathParams = field(default=None)
    security: FetchDeploymentSecurity = field(default=None)
    

@dataclass
class FetchDeploymentResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    serverless_v1_service_environment_deployment: Optional[shared.ServerlessV1ServiceEnvironmentDeployment] = field(default=None)
    
