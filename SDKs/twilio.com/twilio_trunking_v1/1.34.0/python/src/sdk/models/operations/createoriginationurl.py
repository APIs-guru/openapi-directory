from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_ORIGINATION_URL_SERVERS = [
	"https://trunking.twilio.com",
]


@dataclass
class CreateOriginationURLPathParams:
    trunk_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'TrunkSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateOriginationURLSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateOriginationURLRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateOriginationURLPathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateOriginationURLSecurity = field(default=None)
    

@dataclass
class CreateOriginationURLResponses:
    trunking_v1_trunk_origination_url: Optional[shared.TrunkingV1TrunkOriginationURL] = field(default=None)
    

@dataclass
class CreateOriginationURLResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, CreateOriginationURLResponses]] = field(default=None)
    status_code: int = field(default=None)
    
