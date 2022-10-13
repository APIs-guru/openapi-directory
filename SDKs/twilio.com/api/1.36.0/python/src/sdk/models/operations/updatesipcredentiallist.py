from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared
UPDATE_SIP_CREDENTIAL_LIST_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class UpdateSipCredentialListPathParams:
    account_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateSipCredentialListRequestBodyUpdateSipCredentialListRequest:
    friendly_name: str = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    

@dataclass
class UpdateSipCredentialListSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateSipCredentialListRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateSipCredentialListPathParams = field(default=None)
    request: Optional[UpdateSipCredentialListRequestBodyUpdateSipCredentialListRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateSipCredentialListSecurity = field(default=None)
    

@dataclass
class UpdateSipCredentialListResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    api_v2010_account_sip_sip_credential_list: Optional[shared.APIV2010AccountSipSipCredentialList] = field(default=None)
    
