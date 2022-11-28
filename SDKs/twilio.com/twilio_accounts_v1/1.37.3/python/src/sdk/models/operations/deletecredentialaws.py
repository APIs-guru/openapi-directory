from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


DELETE_CREDENTIAL_AWS_SERVERS = [
	"https://accounts.twilio.com",
]


@dataclass
class DeleteCredentialAwsPathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteCredentialAwsSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteCredentialAwsRequest:
    path_params: DeleteCredentialAwsPathParams = field()
    security: DeleteCredentialAwsSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class DeleteCredentialAwsResponse:
    content_type: str = field()
    status_code: int = field()
    
