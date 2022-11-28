from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


DELETE_BUILD_SERVERS = [
	"https://serverless.twilio.com",
]


@dataclass
class DeleteBuildPathParams:
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteBuildSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteBuildRequest:
    path_params: DeleteBuildPathParams = field()
    security: DeleteBuildSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class DeleteBuildResponse:
    content_type: str = field()
    status_code: int = field()
    
