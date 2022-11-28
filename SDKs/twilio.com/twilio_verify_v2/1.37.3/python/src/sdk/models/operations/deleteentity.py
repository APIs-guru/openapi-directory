from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


DELETE_ENTITY_SERVERS = [
	"https://verify.twilio.com",
]


@dataclass
class DeleteEntityPathParams:
    identity: str = field(metadata={'path_param': { 'field_name': 'Identity', 'style': 'simple', 'explode': False }})
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteEntitySecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteEntityRequest:
    path_params: DeleteEntityPathParams = field()
    security: DeleteEntitySecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class DeleteEntityResponse:
    content_type: str = field()
    status_code: int = field()
    
