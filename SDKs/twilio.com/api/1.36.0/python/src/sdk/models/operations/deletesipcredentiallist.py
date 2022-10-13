from dataclasses import dataclass, field
from typing import List,Optional
DELETE_SIP_CREDENTIAL_LIST_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class DeleteSipCredentialListPathParams:
    account_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSipCredentialListSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteSipCredentialListRequest:
    server_url: Optional[str] = field(default=None)
    path_params: DeleteSipCredentialListPathParams = field(default=None)
    security: DeleteSipCredentialListSecurity = field(default=None)
    

@dataclass
class DeleteSipCredentialListResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
