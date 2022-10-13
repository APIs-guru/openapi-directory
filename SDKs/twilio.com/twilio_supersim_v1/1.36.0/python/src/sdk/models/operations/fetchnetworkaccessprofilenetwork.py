from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_NETWORK_ACCESS_PROFILE_NETWORK_SERVERS = [
	"https://supersim.twilio.com",
]


@dataclass
class FetchNetworkAccessProfileNetworkPathParams:
    network_access_profile_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'NetworkAccessProfileSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchNetworkAccessProfileNetworkSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchNetworkAccessProfileNetworkRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchNetworkAccessProfileNetworkPathParams = field(default=None)
    security: FetchNetworkAccessProfileNetworkSecurity = field(default=None)
    

@dataclass
class FetchNetworkAccessProfileNetworkResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    supersim_v1_network_access_profile_network_access_profile_network: Optional[shared.SupersimV1NetworkAccessProfileNetworkAccessProfileNetwork] = field(default=None)
    
