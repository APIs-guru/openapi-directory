from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared
LIST_CREDENTIAL_AWS_SERVERS = [
	"https://accounts.twilio.com",
]


@dataclass
class ListCredentialAwsQueryParams:
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'PageSize', 'style': 'form', 'explode': True }})
    

@dataclass
class ListCredentialAwsSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ListCredentialAwsRequest:
    server_url: Optional[str] = field(default=None)
    query_params: ListCredentialAwsQueryParams = field(default=None)
    security: ListCredentialAwsSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ListCredentialAws200ApplicationJSONMeta:
    first_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_page_url' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    next_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_page_url' }})
    page: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page_size' }})
    previous_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'previous_page_url' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class ListCredentialAws200ApplicationJSONListCredentialAwsResponse:
    credentials: Optional[List[shared.AccountsV1CredentialCredentialAws]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'credentials' }})
    meta: Optional[ListCredentialAws200ApplicationJSONMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    

@dataclass
class ListCredentialAwsResponse:
    content_type: str = field(default=None)
    list_credential_aws_response: Optional[ListCredentialAws200ApplicationJSONListCredentialAwsResponse] = field(default=None)
    status_code: int = field(default=None)
    
