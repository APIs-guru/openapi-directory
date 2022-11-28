from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


CREATE_DEPLOYMENT_SERVERS = [
	"https://serverless.twilio.com",
]


@dataclass
class CreateDeploymentPathParams:
    environment_sid: str = field(metadata={'path_param': { 'field_name': 'EnvironmentSid', 'style': 'simple', 'explode': False }})
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateDeploymentCreateDeploymentRequest:
    build_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'BuildSid' }})
    

@dataclass
class CreateDeploymentSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateDeploymentRequest:
    path_params: CreateDeploymentPathParams = field()
    security: CreateDeploymentSecurity = field()
    request: Optional[CreateDeploymentCreateDeploymentRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateDeploymentResponse:
    content_type: str = field()
    status_code: int = field()
    serverless_v1_service_environment_deployment: Optional[shared.ServerlessV1ServiceEnvironmentDeployment] = field(default=None)
    
