from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_CERTS_SERVERS = [
	"https://oauth.twilio.com",
]


@dataclass
class FetchCertsSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchCertsRequest:
    security: FetchCertsSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchCertsResponse:
    content_type: str = field()
    status_code: int = field()
    oauth_v1_certs: Optional[shared.OauthV1Certs] = field(default=None)
    
