from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_NETWORK_ACCESS_PROFILE_NETWORK_SERVERS = [
	"https://supersim.twilio.com",
]


@dataclass
class CreateNetworkAccessProfileNetworkPathParams:
    network_access_profile_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'NetworkAccessProfileSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateNetworkAccessProfileNetworkSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateNetworkAccessProfileNetworkRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateNetworkAccessProfileNetworkPathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateNetworkAccessProfileNetworkSecurity = field(default=None)
    

@dataclass
class CreateNetworkAccessProfileNetworkResponses:
    supersim_v1_network_access_profile_network_access_profile_network: Optional[shared.SupersimV1NetworkAccessProfileNetworkAccessProfileNetwork] = field(default=None)
    

@dataclass
class CreateNetworkAccessProfileNetworkResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, CreateNetworkAccessProfileNetworkResponses]] = field(default=None)
    status_code: int = field(default=None)
    
