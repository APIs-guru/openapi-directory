from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


DELETE_CREDENTIAL_SERVERS = [
	"https://notify.twilio.com",
]


@dataclass
class DeleteCredentialPathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteCredentialSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteCredentialRequest:
    path_params: DeleteCredentialPathParams = field()
    security: DeleteCredentialSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class DeleteCredentialResponse:
    content_type: str = field()
    status_code: int = field()
    
