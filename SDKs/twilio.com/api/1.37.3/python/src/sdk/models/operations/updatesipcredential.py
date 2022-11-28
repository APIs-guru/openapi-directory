from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


UPDATE_SIP_CREDENTIAL_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class UpdateSipCredentialPathParams:
    account_sid: str = field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    credential_list_sid: str = field(metadata={'path_param': { 'field_name': 'CredentialListSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateSipCredentialUpdateSipCredentialRequest:
    password: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Password' }})
    

@dataclass
class UpdateSipCredentialSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateSipCredentialRequest:
    path_params: UpdateSipCredentialPathParams = field()
    security: UpdateSipCredentialSecurity = field()
    request: Optional[UpdateSipCredentialUpdateSipCredentialRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class UpdateSipCredentialResponse:
    content_type: str = field()
    status_code: int = field()
    api_v2010_account_sip_sip_credential_list_sip_credential: Optional[shared.APIV2010AccountSipSipCredentialListSipCredential] = field(default=None)
    
