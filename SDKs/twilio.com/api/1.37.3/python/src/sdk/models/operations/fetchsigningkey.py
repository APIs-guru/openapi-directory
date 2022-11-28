from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_SIGNING_KEY_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class FetchSigningKeyPathParams:
    account_sid: str = field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchSigningKeySecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchSigningKeyRequest:
    path_params: FetchSigningKeyPathParams = field()
    security: FetchSigningKeySecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchSigningKeyResponse:
    content_type: str = field()
    status_code: int = field()
    api_v2010_account_signing_key: Optional[shared.APIV2010AccountSigningKey] = field(default=None)
    
