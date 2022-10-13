from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared
CREATE_CREDENTIAL_LIST_SERVERS = [
	"https://trunking.twilio.com",
]


@dataclass
class CreateCredentialListPathParams:
    trunk_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'TrunkSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateCredentialListRequestBodyCreateCredentialListRequest:
    credential_list_sid: str = field(default=None, metadata={'form': { 'field_name': 'CredentialListSid' }})
    

@dataclass
class CreateCredentialListSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateCredentialListRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateCredentialListPathParams = field(default=None)
    request: Optional[CreateCredentialListRequestBodyCreateCredentialListRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateCredentialListSecurity = field(default=None)
    

@dataclass
class CreateCredentialListResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    trunking_v1_trunk_credential_list: Optional[shared.TrunkingV1TrunkCredentialList] = field(default=None)
    
