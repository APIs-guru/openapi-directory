from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_ENTITY_SERVERS = [
	"https://verify.twilio.com",
]


@dataclass
class FetchEntityPathParams:
    identity: str = field(metadata={'path_param': { 'field_name': 'Identity', 'style': 'simple', 'explode': False }})
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchEntitySecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchEntityRequest:
    path_params: FetchEntityPathParams = field()
    security: FetchEntitySecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchEntityResponse:
    content_type: str = field()
    status_code: int = field()
    verify_v2_service_entity: Optional[shared.VerifyV2ServiceEntity] = field(default=None)
    
