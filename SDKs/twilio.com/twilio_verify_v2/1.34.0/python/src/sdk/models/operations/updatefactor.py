from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
UPDATE_FACTOR_SERVERS = [
	"https://verify.twilio.com",
]


@dataclass
class UpdateFactorPathParams:
    identity: str = field(default=None, metadata={'path_param': { 'field_name': 'Identity', 'style': 'simple', 'explode': False }})
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateFactorSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateFactorRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateFactorPathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateFactorSecurity = field(default=None)
    

@dataclass
class UpdateFactorResponses:
    verify_v2_service_entity_factor: Optional[shared.VerifyV2ServiceEntityFactor] = field(default=None)
    

@dataclass
class UpdateFactorResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, UpdateFactorResponses]] = field(default=None)
    status_code: int = field(default=None)
    
