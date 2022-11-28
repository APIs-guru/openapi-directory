from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


CREATE_SIP_CREDENTIAL_LIST_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class CreateSipCredentialListPathParams:
    account_sid: str = field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateSipCredentialListCreateSipCredentialListRequest:
    friendly_name: str = field(metadata={'form': { 'field_name': 'FriendlyName' }})
    

@dataclass
class CreateSipCredentialListSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateSipCredentialListRequest:
    path_params: CreateSipCredentialListPathParams = field()
    security: CreateSipCredentialListSecurity = field()
    request: Optional[CreateSipCredentialListCreateSipCredentialListRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateSipCredentialListResponse:
    content_type: str = field()
    status_code: int = field()
    api_v2010_account_sip_sip_credential_list: Optional[shared.APIV2010AccountSipSipCredentialList] = field(default=None)
    
