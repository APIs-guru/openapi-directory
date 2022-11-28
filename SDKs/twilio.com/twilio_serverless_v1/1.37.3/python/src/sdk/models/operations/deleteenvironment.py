from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


DELETE_ENVIRONMENT_SERVERS = [
	"https://serverless.twilio.com",
]


@dataclass
class DeleteEnvironmentPathParams:
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteEnvironmentSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteEnvironmentRequest:
    path_params: DeleteEnvironmentPathParams = field()
    security: DeleteEnvironmentSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class DeleteEnvironmentResponse:
    content_type: str = field()
    status_code: int = field()
    
