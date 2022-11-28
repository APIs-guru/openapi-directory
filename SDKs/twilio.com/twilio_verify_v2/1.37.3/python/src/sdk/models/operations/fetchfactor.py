from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_FACTOR_SERVERS = [
	"https://verify.twilio.com",
]


@dataclass
class FetchFactorPathParams:
    identity: str = field(metadata={'path_param': { 'field_name': 'Identity', 'style': 'simple', 'explode': False }})
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchFactorSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchFactorRequest:
    path_params: FetchFactorPathParams = field()
    security: FetchFactorSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchFactorResponse:
    content_type: str = field()
    status_code: int = field()
    verify_v2_service_entity_factor: Optional[shared.VerifyV2ServiceEntityFactor] = field(default=None)
    
