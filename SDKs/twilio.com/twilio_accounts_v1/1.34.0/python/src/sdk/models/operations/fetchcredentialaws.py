from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_CREDENTIAL_AWS_SERVERS = [
	"https://accounts.twilio.com",
]


@dataclass
class FetchCredentialAwsPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchCredentialAwsSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchCredentialAwsRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchCredentialAwsPathParams = field(default=None)
    security: FetchCredentialAwsSecurity = field(default=None)
    

@dataclass
class FetchCredentialAwsResponses:
    accounts_v1_credential_credential_aws: Optional[shared.AccountsV1CredentialCredentialAws] = field(default=None)
    

@dataclass
class FetchCredentialAwsResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, FetchCredentialAwsResponses]] = field(default=None)
    status_code: int = field(default=None)
    
