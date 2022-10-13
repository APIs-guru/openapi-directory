from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_BUILD_SERVERS = [
	"https://serverless.twilio.com",
]


@dataclass
class CreateBuildPathParams:
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateBuildSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateBuildRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateBuildPathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateBuildSecurity = field(default=None)
    

@dataclass
class CreateBuildResponses:
    serverless_v1_service_build: Optional[shared.ServerlessV1ServiceBuild] = field(default=None)
    

@dataclass
class CreateBuildResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, CreateBuildResponses]] = field(default=None)
    status_code: int = field(default=None)
    
