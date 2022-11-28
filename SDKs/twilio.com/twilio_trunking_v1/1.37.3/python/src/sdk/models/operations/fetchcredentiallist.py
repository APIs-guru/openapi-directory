from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_CREDENTIAL_LIST_SERVERS = [
	"https://trunking.twilio.com",
]


@dataclass
class FetchCredentialListPathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    trunk_sid: str = field(metadata={'path_param': { 'field_name': 'TrunkSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchCredentialListSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchCredentialListRequest:
    path_params: FetchCredentialListPathParams = field()
    security: FetchCredentialListSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchCredentialListResponse:
    content_type: str = field()
    status_code: int = field()
    trunking_v1_trunk_credential_list: Optional[shared.TrunkingV1TrunkCredentialList] = field(default=None)
    
