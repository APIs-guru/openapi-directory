from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_NETWORK_ACCESS_PROFILE_SERVERS = [
	"https://supersim.twilio.com",
]


@dataclass
class CreateNetworkAccessProfileSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateNetworkAccessProfileRequest:
    server_url: Optional[str] = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateNetworkAccessProfileSecurity = field(default=None)
    

@dataclass
class CreateNetworkAccessProfileResponses:
    supersim_v1_network_access_profile: Optional[shared.SupersimV1NetworkAccessProfile] = field(default=None)
    

@dataclass
class CreateNetworkAccessProfileResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, CreateNetworkAccessProfileResponses]] = field(default=None)
    status_code: int = field(default=None)
    
