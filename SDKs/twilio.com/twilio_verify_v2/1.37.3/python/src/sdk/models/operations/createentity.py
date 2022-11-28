from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


CREATE_ENTITY_SERVERS = [
	"https://verify.twilio.com",
]


@dataclass
class CreateEntityPathParams:
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateEntityCreateEntityRequest:
    identity: str = field(metadata={'form': { 'field_name': 'Identity' }})
    

@dataclass
class CreateEntitySecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateEntityRequest:
    path_params: CreateEntityPathParams = field()
    security: CreateEntitySecurity = field()
    request: Optional[CreateEntityCreateEntityRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateEntityResponse:
    content_type: str = field()
    status_code: int = field()
    verify_v2_service_entity: Optional[shared.VerifyV2ServiceEntity] = field(default=None)
    
