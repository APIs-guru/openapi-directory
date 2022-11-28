from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


CREATE_NETWORK_ACCESS_PROFILE_NETWORK_SERVERS = [
	"https://supersim.twilio.com",
]


@dataclass
class CreateNetworkAccessProfileNetworkPathParams:
    network_access_profile_sid: str = field(metadata={'path_param': { 'field_name': 'NetworkAccessProfileSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateNetworkAccessProfileNetworkCreateNetworkAccessProfileNetworkRequest:
    network: str = field(metadata={'form': { 'field_name': 'Network' }})
    

@dataclass
class CreateNetworkAccessProfileNetworkSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateNetworkAccessProfileNetworkRequest:
    path_params: CreateNetworkAccessProfileNetworkPathParams = field()
    security: CreateNetworkAccessProfileNetworkSecurity = field()
    request: Optional[CreateNetworkAccessProfileNetworkCreateNetworkAccessProfileNetworkRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateNetworkAccessProfileNetworkResponse:
    content_type: str = field()
    status_code: int = field()
    supersim_v1_network_access_profile_network_access_profile_network: Optional[shared.SupersimV1NetworkAccessProfileNetworkAccessProfileNetwork] = field(default=None)
    
