from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_CREDENTIAL_AWS_SERVERS = [
	"https://accounts.twilio.com",
]


@dataclass
class CreateCredentialAwsSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateCredentialAwsRequest:
    server_url: Optional[str] = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateCredentialAwsSecurity = field(default=None)
    

@dataclass
class CreateCredentialAwsResponses:
    accounts_v1_credential_credential_aws: Optional[shared.AccountsV1CredentialCredentialAws] = field(default=None)
    

@dataclass
class CreateCredentialAwsResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, CreateCredentialAwsResponses]] = field(default=None)
    status_code: int = field(default=None)
    
