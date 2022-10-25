from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared
UPDATE_SIPREC_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class UpdateSiprecPathParams:
    account_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    call_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'CallSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateSiprecUpdateSiprecRequest:
    status: shared.SiprecEnumUpdateStatusEnum = field(default=None, metadata={'form': { 'field_name': 'Status' }})
    

@dataclass
class UpdateSiprecSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateSiprecRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateSiprecPathParams = field(default=None)
    request: Optional[UpdateSiprecUpdateSiprecRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateSiprecSecurity = field(default=None)
    

@dataclass
class UpdateSiprecResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    api_v2010_account_call_siprec: Optional[shared.APIV2010AccountCallSiprec] = field(default=None)
    
