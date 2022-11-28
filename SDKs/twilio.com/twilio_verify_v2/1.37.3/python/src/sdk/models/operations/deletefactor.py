from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


DELETE_FACTOR_SERVERS = [
	"https://verify.twilio.com",
]


@dataclass
class DeleteFactorPathParams:
    identity: str = field(metadata={'path_param': { 'field_name': 'Identity', 'style': 'simple', 'explode': False }})
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteFactorSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteFactorRequest:
    path_params: DeleteFactorPathParams = field()
    security: DeleteFactorSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class DeleteFactorResponse:
    content_type: str = field()
    status_code: int = field()
    
