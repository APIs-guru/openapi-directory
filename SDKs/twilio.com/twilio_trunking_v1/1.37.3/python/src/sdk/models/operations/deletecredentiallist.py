from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


DELETE_CREDENTIAL_LIST_SERVERS = [
	"https://trunking.twilio.com",
]


@dataclass
class DeleteCredentialListPathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    trunk_sid: str = field(metadata={'path_param': { 'field_name': 'TrunkSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteCredentialListSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteCredentialListRequest:
    path_params: DeleteCredentialListPathParams = field()
    security: DeleteCredentialListSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class DeleteCredentialListResponse:
    content_type: str = field()
    status_code: int = field()
    
