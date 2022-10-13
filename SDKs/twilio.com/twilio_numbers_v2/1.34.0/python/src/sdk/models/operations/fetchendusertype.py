from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_END_USER_TYPE_SERVERS = [
	"https://numbers.twilio.com",
]


@dataclass
class FetchEndUserTypePathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchEndUserTypeSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchEndUserTypeRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchEndUserTypePathParams = field(default=None)
    security: FetchEndUserTypeSecurity = field(default=None)
    

@dataclass
class FetchEndUserTypeResponses:
    numbers_v2_regulatory_compliance_end_user_type: Optional[shared.NumbersV2RegulatoryComplianceEndUserType] = field(default=None)
    

@dataclass
class FetchEndUserTypeResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, FetchEndUserTypeResponses]] = field(default=None)
    status_code: int = field(default=None)
    
