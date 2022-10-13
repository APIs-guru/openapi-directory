from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_SIPREC_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class CreateSiprecPathParams:
    account_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    call_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'CallSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateSiprecSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateSiprecRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateSiprecPathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateSiprecSecurity = field(default=None)
    

@dataclass
class CreateSiprecResponses:
    api_v2010_account_call_siprec: Optional[shared.APIV2010AccountCallSiprec] = field(default=None)
    

@dataclass
class CreateSiprecResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, CreateSiprecResponses]] = field(default=None)
    status_code: int = field(default=None)
    
