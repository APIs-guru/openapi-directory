from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_ESIM_PROFILE_SERVERS = [
	"https://supersim.twilio.com",
]


@dataclass
class FetchEsimProfilePathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchEsimProfileSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchEsimProfileRequest:
    path_params: FetchEsimProfilePathParams = field()
    security: FetchEsimProfileSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchEsimProfileResponse:
    content_type: str = field()
    status_code: int = field()
    supersim_v1_esim_profile: Optional[shared.SupersimV1EsimProfile] = field(default=None)
    
