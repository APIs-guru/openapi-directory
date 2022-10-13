from dataclasses import dataclass, field
from typing import Optional
DELETE_ENVIRONMENT_SERVERS = [
	"https://serverless.twilio.com",
]


@dataclass
class DeleteEnvironmentPathParams:
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteEnvironmentSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteEnvironmentRequest:
    server_url: Optional[str] = field(default=None)
    path_params: DeleteEnvironmentPathParams = field(default=None)
    security: DeleteEnvironmentSecurity = field(default=None)
    

@dataclass
class DeleteEnvironmentResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
