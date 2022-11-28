from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


CREATE_BUILD_SERVERS = [
	"https://serverless.twilio.com",
]


@dataclass
class CreateBuildPathParams:
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateBuildCreateBuildRequest:
    asset_versions: Optional[List[str]] = field(default=None, metadata={'form': { 'field_name': 'AssetVersions' }})
    dependencies: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Dependencies' }})
    function_versions: Optional[List[str]] = field(default=None, metadata={'form': { 'field_name': 'FunctionVersions' }})
    runtime: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Runtime' }})
    

@dataclass
class CreateBuildSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateBuildRequest:
    path_params: CreateBuildPathParams = field()
    security: CreateBuildSecurity = field()
    request: Optional[CreateBuildCreateBuildRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateBuildResponse:
    content_type: str = field()
    status_code: int = field()
    serverless_v1_service_build: Optional[shared.ServerlessV1ServiceBuild] = field(default=None)
    
