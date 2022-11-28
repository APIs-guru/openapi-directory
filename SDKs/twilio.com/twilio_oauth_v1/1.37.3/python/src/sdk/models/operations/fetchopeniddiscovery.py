from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_OPENID_DISCOVERY_SERVERS = [
	"https://oauth.twilio.com",
]


@dataclass
class FetchOpenidDiscoverySecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchOpenidDiscoveryRequest:
    security: FetchOpenidDiscoverySecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchOpenidDiscoveryResponse:
    content_type: str = field()
    status_code: int = field()
    oauth_v1_openid_discovery: Optional[shared.OauthV1OpenidDiscovery] = field(default=None)
    
