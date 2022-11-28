from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_CREDENTIAL_AWS_SERVERS = [
	"https://accounts.twilio.com",
]


@dataclass
class FetchCredentialAwsPathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchCredentialAwsSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchCredentialAwsRequest:
    path_params: FetchCredentialAwsPathParams = field()
    security: FetchCredentialAwsSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchCredentialAwsResponse:
    content_type: str = field()
    status_code: int = field()
    accounts_v1_credential_credential_aws: Optional[shared.AccountsV1CredentialCredentialAws] = field(default=None)
    
