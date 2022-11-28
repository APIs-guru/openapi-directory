from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSecurity:
    bearer_token: shared.SchemeBearerToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetRequest:
    path_params: GetPathParams = field()
    security: GetSecurity = field()
    

@dataclass
class GetResponse:
    content_type: str = field()
    status_code: int = field()
    deletion_response: Optional[shared.DeletionResponse] = field(default=None)
    
