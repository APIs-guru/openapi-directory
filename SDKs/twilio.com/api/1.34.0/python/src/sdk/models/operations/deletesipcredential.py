from dataclasses import dataclass, field
from typing import List,Optional
DELETE_SIP_CREDENTIAL_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class DeleteSipCredentialPathParams:
    account_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    credential_list_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'CredentialListSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSipCredentialSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteSipCredentialRequest:
    server_url: Optional[str] = field(default=None)
    path_params: DeleteSipCredentialPathParams = field(default=None)
    security: DeleteSipCredentialSecurity = field(default=None)
    

@dataclass
class DeleteSipCredentialResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
