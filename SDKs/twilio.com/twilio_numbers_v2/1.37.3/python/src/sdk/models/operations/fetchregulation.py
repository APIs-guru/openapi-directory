from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_REGULATION_SERVERS = [
	"https://numbers.twilio.com",
]


@dataclass
class FetchRegulationPathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchRegulationSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchRegulationRequest:
    path_params: FetchRegulationPathParams = field()
    security: FetchRegulationSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchRegulationResponse:
    content_type: str = field()
    status_code: int = field()
    numbers_v2_regulatory_compliance_regulation: Optional[shared.NumbersV2RegulatoryComplianceRegulation] = field(default=None)
    
