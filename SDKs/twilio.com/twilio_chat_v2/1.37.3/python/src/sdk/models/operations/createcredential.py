from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


CREATE_CREDENTIAL_SERVERS = [
	"https://chat.twilio.com",
]


@dataclass
class CreateCredentialCreateCredentialRequest:
    type: shared.CredentialEnumPushServiceEnum = field(metadata={'form': { 'field_name': 'Type' }})
    api_key: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'ApiKey' }})
    certificate: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Certificate' }})
    friendly_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    private_key: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'PrivateKey' }})
    sandbox: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'Sandbox' }})
    secret: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Secret' }})
    

@dataclass
class CreateCredentialSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateCredentialRequest:
    security: CreateCredentialSecurity = field()
    request: Optional[CreateCredentialCreateCredentialRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateCredentialResponse:
    content_type: str = field()
    status_code: int = field()
    chat_v2_credential: Optional[shared.ChatV2Credential] = field(default=None)
    
