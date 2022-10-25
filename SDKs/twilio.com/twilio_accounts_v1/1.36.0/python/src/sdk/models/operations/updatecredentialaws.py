from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
UPDATE_CREDENTIAL_AWS_SERVERS = [
	"https://accounts.twilio.com",
]


@dataclass
class UpdateCredentialAwsPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateCredentialAwsUpdateCredentialAwsRequest:
    friendly_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    

@dataclass
class UpdateCredentialAwsSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateCredentialAwsRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateCredentialAwsPathParams = field(default=None)
    request: Optional[UpdateCredentialAwsUpdateCredentialAwsRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateCredentialAwsSecurity = field(default=None)
    

@dataclass
class UpdateCredentialAwsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    accounts_v1_credential_credential_aws: Optional[shared.AccountsV1CredentialCredentialAws] = field(default=None)
    
