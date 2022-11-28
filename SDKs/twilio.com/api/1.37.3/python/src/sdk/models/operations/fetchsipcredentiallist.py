from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_SIP_CREDENTIAL_LIST_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class FetchSipCredentialListPathParams:
    account_sid: str = field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchSipCredentialListSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchSipCredentialListRequest:
    path_params: FetchSipCredentialListPathParams = field()
    security: FetchSipCredentialListSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchSipCredentialListResponse:
    content_type: str = field()
    status_code: int = field()
    api_v2010_account_sip_sip_credential_list: Optional[shared.APIV2010AccountSipSipCredentialList] = field(default=None)
    
