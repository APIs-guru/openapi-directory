from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


DELETE_SIP_CREDENTIAL_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class DeleteSipCredentialPathParams:
    account_sid: str = field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    credential_list_sid: str = field(metadata={'path_param': { 'field_name': 'CredentialListSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSipCredentialSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteSipCredentialRequest:
    path_params: DeleteSipCredentialPathParams = field()
    security: DeleteSipCredentialSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class DeleteSipCredentialResponse:
    content_type: str = field()
    status_code: int = field()
    
