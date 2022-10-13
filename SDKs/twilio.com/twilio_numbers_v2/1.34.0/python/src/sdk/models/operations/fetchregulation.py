from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_REGULATION_SERVERS = [
	"https://numbers.twilio.com",
]


@dataclass
class FetchRegulationPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchRegulationSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchRegulationRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchRegulationPathParams = field(default=None)
    security: FetchRegulationSecurity = field(default=None)
    

@dataclass
class FetchRegulationResponses:
    numbers_v2_regulatory_compliance_regulation: Optional[shared.NumbersV2RegulatoryComplianceRegulation] = field(default=None)
    

@dataclass
class FetchRegulationResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, FetchRegulationResponses]] = field(default=None)
    status_code: int = field(default=None)
    
