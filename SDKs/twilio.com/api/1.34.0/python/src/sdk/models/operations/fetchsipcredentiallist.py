from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared
FETCH_SIP_CREDENTIAL_LIST_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class FetchSipCredentialListPathParams:
    account_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchSipCredentialListSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchSipCredentialListRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchSipCredentialListPathParams = field(default=None)
    security: FetchSipCredentialListSecurity = field(default=None)
    

@dataclass
class FetchSipCredentialListResponses:
    api_v2010_account_sip_sip_credential_list: Optional[shared.APIV2010AccountSipSipCredentialList] = field(default=None)
    

@dataclass
class FetchSipCredentialListResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, FetchSipCredentialListResponses]] = field(default=None)
    status_code: int = field(default=None)
    
