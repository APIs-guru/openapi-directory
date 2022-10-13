from dataclasses import dataclass, field
from typing import Optional
DELETE_BUILD_SERVERS = [
	"https://serverless.twilio.com",
]


@dataclass
class DeleteBuildPathParams:
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteBuildSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteBuildRequest:
    server_url: Optional[str] = field(default=None)
    path_params: DeleteBuildPathParams = field(default=None)
    security: DeleteBuildSecurity = field(default=None)
    

@dataclass
class DeleteBuildResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
