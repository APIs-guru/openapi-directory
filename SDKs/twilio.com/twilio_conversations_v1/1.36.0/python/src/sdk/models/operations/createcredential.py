from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared
CREATE_CREDENTIAL_SERVERS = [
	"https://conversations.twilio.com",
]


@dataclass
class CreateCredentialRequestBodyCreateCredentialRequest:
    api_key: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'ApiKey' }})
    certificate: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Certificate' }})
    friendly_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    private_key: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'PrivateKey' }})
    sandbox: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'Sandbox' }})
    secret: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Secret' }})
    type: shared.CredentialEnumPushTypeEnum = field(default=None, metadata={'form': { 'field_name': 'Type' }})
    

@dataclass
class CreateCredentialSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateCredentialRequest:
    server_url: Optional[str] = field(default=None)
    request: Optional[CreateCredentialRequestBodyCreateCredentialRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateCredentialSecurity = field(default=None)
    

@dataclass
class CreateCredentialResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    conversations_v1_credential: Optional[shared.ConversationsV1Credential] = field(default=None)
    
