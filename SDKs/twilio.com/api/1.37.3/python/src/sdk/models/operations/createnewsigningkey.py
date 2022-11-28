from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


CREATE_NEW_SIGNING_KEY_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class CreateNewSigningKeyPathParams:
    account_sid: str = field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateNewSigningKeyCreateNewSigningKeyRequest:
    friendly_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    

@dataclass
class CreateNewSigningKeySecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateNewSigningKeyRequest:
    path_params: CreateNewSigningKeyPathParams = field()
    security: CreateNewSigningKeySecurity = field()
    request: Optional[CreateNewSigningKeyCreateNewSigningKeyRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateNewSigningKeyResponse:
    content_type: str = field()
    status_code: int = field()
    api_v2010_account_new_signing_key: Optional[shared.APIV2010AccountNewSigningKey] = field(default=None)
    
