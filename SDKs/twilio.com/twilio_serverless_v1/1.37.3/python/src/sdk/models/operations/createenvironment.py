from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


CREATE_ENVIRONMENT_SERVERS = [
	"https://serverless.twilio.com",
]


@dataclass
class CreateEnvironmentPathParams:
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateEnvironmentCreateEnvironmentRequest:
    unique_name: str = field(metadata={'form': { 'field_name': 'UniqueName' }})
    domain_suffix: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'DomainSuffix' }})
    

@dataclass
class CreateEnvironmentSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateEnvironmentRequest:
    path_params: CreateEnvironmentPathParams = field()
    security: CreateEnvironmentSecurity = field()
    request: Optional[CreateEnvironmentCreateEnvironmentRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateEnvironmentResponse:
    content_type: str = field()
    status_code: int = field()
    serverless_v1_service_environment: Optional[shared.ServerlessV1ServiceEnvironment] = field(default=None)
    
