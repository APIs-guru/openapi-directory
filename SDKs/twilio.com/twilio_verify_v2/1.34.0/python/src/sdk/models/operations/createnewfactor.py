from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_NEW_FACTOR_SERVERS = [
	"https://verify.twilio.com",
]


@dataclass
class CreateNewFactorPathParams:
    identity: str = field(default=None, metadata={'path_param': { 'field_name': 'Identity', 'style': 'simple', 'explode': False }})
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateNewFactorSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateNewFactorRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateNewFactorPathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateNewFactorSecurity = field(default=None)
    

@dataclass
class CreateNewFactorResponses:
    verify_v2_service_entity_new_factor: Optional[shared.VerifyV2ServiceEntityNewFactor] = field(default=None)
    

@dataclass
class CreateNewFactorResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, CreateNewFactorResponses]] = field(default=None)
    status_code: int = field(default=None)
    
