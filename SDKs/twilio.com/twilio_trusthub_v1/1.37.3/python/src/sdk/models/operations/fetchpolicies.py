from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_POLICIES_SERVERS = [
	"https://trusthub.twilio.com",
]


@dataclass
class FetchPoliciesPathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchPoliciesSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchPoliciesRequest:
    path_params: FetchPoliciesPathParams = field()
    security: FetchPoliciesSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchPoliciesResponse:
    content_type: str = field()
    status_code: int = field()
    trusthub_v1_policies: Optional[shared.TrusthubV1Policies] = field(default=None)
    
