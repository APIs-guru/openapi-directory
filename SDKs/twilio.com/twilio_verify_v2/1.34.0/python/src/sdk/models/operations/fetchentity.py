from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_ENTITY_SERVERS = [
	"https://verify.twilio.com",
]


@dataclass
class FetchEntityPathParams:
    identity: str = field(default=None, metadata={'path_param': { 'field_name': 'Identity', 'style': 'simple', 'explode': False }})
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchEntitySecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchEntityRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchEntityPathParams = field(default=None)
    security: FetchEntitySecurity = field(default=None)
    

@dataclass
class FetchEntityResponses:
    verify_v2_service_entity: Optional[shared.VerifyV2ServiceEntity] = field(default=None)
    

@dataclass
class FetchEntityResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, FetchEntityResponses]] = field(default=None)
    status_code: int = field(default=None)
    
