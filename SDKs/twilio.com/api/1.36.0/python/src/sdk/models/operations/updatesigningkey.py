from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
UPDATE_SIGNING_KEY_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class UpdateSigningKeyPathParams:
    account_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateSigningKeyUpdateSigningKeyRequest:
    friendly_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    

@dataclass
class UpdateSigningKeySecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateSigningKeyRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateSigningKeyPathParams = field(default=None)
    request: Optional[UpdateSigningKeyUpdateSigningKeyRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateSigningKeySecurity = field(default=None)
    

@dataclass
class UpdateSigningKeyResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    api_v2010_account_signing_key: Optional[shared.APIV2010AccountSigningKey] = field(default=None)
    
