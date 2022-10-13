from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_ORIGINATION_URL_SERVERS = [
	"https://trunking.twilio.com",
]


@dataclass
class FetchOriginationURLPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    trunk_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'TrunkSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchOriginationURLSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchOriginationURLRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchOriginationURLPathParams = field(default=None)
    security: FetchOriginationURLSecurity = field(default=None)
    

@dataclass
class FetchOriginationURLResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    trunking_v1_trunk_origination_url: Optional[shared.TrunkingV1TrunkOriginationURL] = field(default=None)
    
