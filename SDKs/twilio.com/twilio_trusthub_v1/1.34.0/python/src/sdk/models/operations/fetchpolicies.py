from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_POLICIES_SERVERS = [
	"https://trusthub.twilio.com",
]


@dataclass
class FetchPoliciesPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchPoliciesSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchPoliciesRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchPoliciesPathParams = field(default=None)
    security: FetchPoliciesSecurity = field(default=None)
    

@dataclass
class FetchPoliciesResponses:
    trusthub_v1_policies: Optional[shared.TrusthubV1Policies] = field(default=None)
    

@dataclass
class FetchPoliciesResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, FetchPoliciesResponses]] = field(default=None)
    status_code: int = field(default=None)
    
