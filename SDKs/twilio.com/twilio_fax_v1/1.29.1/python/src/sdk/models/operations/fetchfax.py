from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_FAX_SERVERS = [
	"https://fax.twilio.com",
]


@dataclass
class FetchFaxPathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchFaxSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchFaxRequest:
    path_params: FetchFaxPathParams = field()
    security: FetchFaxSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchFaxResponse:
    content_type: str = field()
    status_code: int = field()
    fax_v1_fax: Optional[shared.FaxV1Fax] = field(default=None)
    
