from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class RemoveAccountKeyPathParams:
    key_id: str = field(metadata={'path_param': { 'field_name': 'key_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RemoveAccountKeySecurity:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class RemoveAccountKeyRequest:
    path_params: RemoveAccountKeyPathParams = field()
    security: RemoveAccountKeySecurity = field()
    

@dataclass
class RemoveAccountKeyResponse:
    content_type: str = field()
    status_code: int = field()
    
