from dataclasses import dataclass, field
from typing import Optional
DELETE_CREDENTIAL_AWS_SERVERS = [
	"https://accounts.twilio.com",
]


@dataclass
class DeleteCredentialAwsPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteCredentialAwsSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteCredentialAwsRequest:
    server_url: Optional[str] = field(default=None)
    path_params: DeleteCredentialAwsPathParams = field(default=None)
    security: DeleteCredentialAwsSecurity = field(default=None)
    

@dataclass
class DeleteCredentialAwsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
