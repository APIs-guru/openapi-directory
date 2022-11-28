from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


UPDATE_CREDENTIAL_SERVERS = [
	"https://chat.twilio.com",
]


@dataclass
class UpdateCredentialPathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateCredentialUpdateCredentialRequest:
    api_key: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'ApiKey' }})
    certificate: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Certificate' }})
    friendly_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    private_key: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'PrivateKey' }})
    sandbox: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'Sandbox' }})
    secret: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Secret' }})
    

@dataclass
class UpdateCredentialSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateCredentialRequest:
    path_params: UpdateCredentialPathParams = field()
    security: UpdateCredentialSecurity = field()
    request: Optional[UpdateCredentialUpdateCredentialRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class UpdateCredentialResponse:
    content_type: str = field()
    status_code: int = field()
    chat_v1_credential: Optional[shared.ChatV1Credential] = field(default=None)
    
