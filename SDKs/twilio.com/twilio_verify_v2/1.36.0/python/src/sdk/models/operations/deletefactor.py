from dataclasses import dataclass, field
from typing import Optional
DELETE_FACTOR_SERVERS = [
	"https://verify.twilio.com",
]


@dataclass
class DeleteFactorPathParams:
    identity: str = field(default=None, metadata={'path_param': { 'field_name': 'Identity', 'style': 'simple', 'explode': False }})
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteFactorSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteFactorRequest:
    server_url: Optional[str] = field(default=None)
    path_params: DeleteFactorPathParams = field(default=None)
    security: DeleteFactorSecurity = field(default=None)
    

@dataclass
class DeleteFactorResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
