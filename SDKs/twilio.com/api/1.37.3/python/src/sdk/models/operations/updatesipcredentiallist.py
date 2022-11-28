from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


UPDATE_SIP_CREDENTIAL_LIST_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class UpdateSipCredentialListPathParams:
    account_sid: str = field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateSipCredentialListUpdateSipCredentialListRequest:
    friendly_name: str = field(metadata={'form': { 'field_name': 'FriendlyName' }})
    

@dataclass
class UpdateSipCredentialListSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateSipCredentialListRequest:
    path_params: UpdateSipCredentialListPathParams = field()
    security: UpdateSipCredentialListSecurity = field()
    request: Optional[UpdateSipCredentialListUpdateSipCredentialListRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class UpdateSipCredentialListResponse:
    content_type: str = field()
    status_code: int = field()
    api_v2010_account_sip_sip_credential_list: Optional[shared.APIV2010AccountSipSipCredentialList] = field(default=None)
    
