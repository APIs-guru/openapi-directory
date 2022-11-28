from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


UPDATE_CREDENTIAL_AWS_SERVERS = [
	"https://accounts.twilio.com",
]


@dataclass
class UpdateCredentialAwsPathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateCredentialAwsUpdateCredentialAwsRequest:
    friendly_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    

@dataclass
class UpdateCredentialAwsSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateCredentialAwsRequest:
    path_params: UpdateCredentialAwsPathParams = field()
    security: UpdateCredentialAwsSecurity = field()
    request: Optional[UpdateCredentialAwsUpdateCredentialAwsRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class UpdateCredentialAwsResponse:
    content_type: str = field()
    status_code: int = field()
    accounts_v1_credential_credential_aws: Optional[shared.AccountsV1CredentialCredentialAws] = field(default=None)
    
