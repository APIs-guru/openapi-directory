from dataclasses import dataclass, field
from typing import List,Optional
DELETE_CREDENTIAL_LIST_SERVERS = [
	"https://trunking.twilio.com",
]


@dataclass
class DeleteCredentialListPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    trunk_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'TrunkSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteCredentialListSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteCredentialListRequest:
    server_url: Optional[str] = field(default=None)
    path_params: DeleteCredentialListPathParams = field(default=None)
    security: DeleteCredentialListSecurity = field(default=None)
    

@dataclass
class DeleteCredentialListResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
