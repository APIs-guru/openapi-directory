from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_DEPLOYMENT_SERVERS = [
	"https://serverless.twilio.com",
]


@dataclass
class CreateDeploymentPathParams:
    environment_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'EnvironmentSid', 'style': 'simple', 'explode': False }})
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateDeploymentRequestBodyCreateDeploymentRequest:
    build_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'BuildSid' }})
    

@dataclass
class CreateDeploymentSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateDeploymentRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateDeploymentPathParams = field(default=None)
    request: Optional[CreateDeploymentRequestBodyCreateDeploymentRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateDeploymentSecurity = field(default=None)
    

@dataclass
class CreateDeploymentResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    serverless_v1_service_environment_deployment: Optional[shared.ServerlessV1ServiceEnvironmentDeployment] = field(default=None)
    
