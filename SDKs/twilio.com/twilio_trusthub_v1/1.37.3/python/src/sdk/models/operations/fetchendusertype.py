from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_END_USER_TYPE_SERVERS = [
	"https://trusthub.twilio.com",
]


@dataclass
class FetchEndUserTypePathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchEndUserTypeSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchEndUserTypeRequest:
    path_params: FetchEndUserTypePathParams = field()
    security: FetchEndUserTypeSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchEndUserTypeResponse:
    content_type: str = field()
    status_code: int = field()
    trusthub_v1_end_user_type: Optional[shared.TrusthubV1EndUserType] = field(default=None)
    
