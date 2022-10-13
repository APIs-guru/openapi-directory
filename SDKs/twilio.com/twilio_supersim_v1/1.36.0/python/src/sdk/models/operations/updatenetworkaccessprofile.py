from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
UPDATE_NETWORK_ACCESS_PROFILE_SERVERS = [
	"https://supersim.twilio.com",
]


@dataclass
class UpdateNetworkAccessProfilePathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateNetworkAccessProfileRequestBodyUpdateNetworkAccessProfileRequest:
    unique_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'UniqueName' }})
    

@dataclass
class UpdateNetworkAccessProfileSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateNetworkAccessProfileRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateNetworkAccessProfilePathParams = field(default=None)
    request: Optional[UpdateNetworkAccessProfileRequestBodyUpdateNetworkAccessProfileRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateNetworkAccessProfileSecurity = field(default=None)
    

@dataclass
class UpdateNetworkAccessProfileResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    supersim_v1_network_access_profile: Optional[shared.SupersimV1NetworkAccessProfile] = field(default=None)
    
