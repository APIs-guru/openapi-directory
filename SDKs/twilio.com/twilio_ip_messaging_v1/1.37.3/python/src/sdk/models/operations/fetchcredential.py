from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_CREDENTIAL_SERVERS = [
	"https://ip-messaging.twilio.com",
]


@dataclass
class FetchCredentialPathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchCredentialSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchCredentialRequest:
    path_params: FetchCredentialPathParams = field()
    security: FetchCredentialSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchCredentialResponse:
    content_type: str = field()
    status_code: int = field()
    ip_messaging_v1_credential: Optional[shared.IPMessagingV1Credential] = field(default=None)
    
