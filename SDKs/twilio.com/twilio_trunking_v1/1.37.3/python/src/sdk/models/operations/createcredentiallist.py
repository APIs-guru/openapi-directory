from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


CREATE_CREDENTIAL_LIST_SERVERS = [
	"https://trunking.twilio.com",
]


@dataclass
class CreateCredentialListPathParams:
    trunk_sid: str = field(metadata={'path_param': { 'field_name': 'TrunkSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateCredentialListCreateCredentialListRequest:
    credential_list_sid: str = field(metadata={'form': { 'field_name': 'CredentialListSid' }})
    

@dataclass
class CreateCredentialListSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateCredentialListRequest:
    path_params: CreateCredentialListPathParams = field()
    security: CreateCredentialListSecurity = field()
    request: Optional[CreateCredentialListCreateCredentialListRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateCredentialListResponse:
    content_type: str = field()
    status_code: int = field()
    trunking_v1_trunk_credential_list: Optional[shared.TrunkingV1TrunkCredentialList] = field(default=None)
    
