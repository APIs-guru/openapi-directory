from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


CREATE_CREDENTIAL_AWS_SERVERS = [
	"https://accounts.twilio.com",
]


@dataclass
class CreateCredentialAwsCreateCredentialAwsRequest:
    credentials: str = field(metadata={'form': { 'field_name': 'Credentials' }})
    account_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'AccountSid' }})
    friendly_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    

@dataclass
class CreateCredentialAwsSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateCredentialAwsRequest:
    security: CreateCredentialAwsSecurity = field()
    request: Optional[CreateCredentialAwsCreateCredentialAwsRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateCredentialAwsResponse:
    content_type: str = field()
    status_code: int = field()
    accounts_v1_credential_credential_aws: Optional[shared.AccountsV1CredentialCredentialAws] = field(default=None)
    
