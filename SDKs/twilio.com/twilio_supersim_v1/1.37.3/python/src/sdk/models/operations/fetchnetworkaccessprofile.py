from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_NETWORK_ACCESS_PROFILE_SERVERS = [
	"https://supersim.twilio.com",
]


@dataclass
class FetchNetworkAccessProfilePathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchNetworkAccessProfileSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchNetworkAccessProfileRequest:
    path_params: FetchNetworkAccessProfilePathParams = field()
    security: FetchNetworkAccessProfileSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchNetworkAccessProfileResponse:
    content_type: str = field()
    status_code: int = field()
    supersim_v1_network_access_profile: Optional[shared.SupersimV1NetworkAccessProfile] = field(default=None)
    
