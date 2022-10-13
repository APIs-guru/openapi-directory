from dataclasses import dataclass, field
from typing import Optional
DELETE_ENTITY_SERVERS = [
	"https://verify.twilio.com",
]


@dataclass
class DeleteEntityPathParams:
    identity: str = field(default=None, metadata={'path_param': { 'field_name': 'Identity', 'style': 'simple', 'explode': False }})
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteEntitySecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteEntityRequest:
    server_url: Optional[str] = field(default=None)
    path_params: DeleteEntityPathParams = field(default=None)
    security: DeleteEntitySecurity = field(default=None)
    

@dataclass
class DeleteEntityResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
