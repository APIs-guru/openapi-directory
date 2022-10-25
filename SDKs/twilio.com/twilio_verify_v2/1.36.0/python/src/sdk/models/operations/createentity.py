from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_ENTITY_SERVERS = [
	"https://verify.twilio.com",
]


@dataclass
class CreateEntityPathParams:
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateEntityCreateEntityRequest:
    identity: str = field(default=None, metadata={'form': { 'field_name': 'Identity' }})
    

@dataclass
class CreateEntitySecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateEntityRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateEntityPathParams = field(default=None)
    request: Optional[CreateEntityCreateEntityRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateEntitySecurity = field(default=None)
    

@dataclass
class CreateEntityResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    verify_v2_service_entity: Optional[shared.VerifyV2ServiceEntity] = field(default=None)
    
