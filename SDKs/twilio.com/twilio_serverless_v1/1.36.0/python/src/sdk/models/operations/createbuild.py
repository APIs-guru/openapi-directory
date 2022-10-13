from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared
CREATE_BUILD_SERVERS = [
	"https://serverless.twilio.com",
]


@dataclass
class CreateBuildPathParams:
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateBuildRequestBodyCreateBuildRequest:
    asset_versions: Optional[List[str]] = field(default=None, metadata={'form': { 'field_name': 'AssetVersions' }})
    dependencies: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Dependencies' }})
    function_versions: Optional[List[str]] = field(default=None, metadata={'form': { 'field_name': 'FunctionVersions' }})
    runtime: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Runtime' }})
    

@dataclass
class CreateBuildSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateBuildRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateBuildPathParams = field(default=None)
    request: Optional[CreateBuildRequestBodyCreateBuildRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateBuildSecurity = field(default=None)
    

@dataclass
class CreateBuildResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    serverless_v1_service_build: Optional[shared.ServerlessV1ServiceBuild] = field(default=None)
    
