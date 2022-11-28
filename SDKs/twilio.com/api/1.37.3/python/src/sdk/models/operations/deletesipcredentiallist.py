from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


DELETE_SIP_CREDENTIAL_LIST_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class DeleteSipCredentialListPathParams:
    account_sid: str = field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSipCredentialListSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteSipCredentialListRequest:
    path_params: DeleteSipCredentialListPathParams = field()
    security: DeleteSipCredentialListSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class DeleteSipCredentialListResponse:
    content_type: str = field()
    status_code: int = field()
    
