from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSecurity:
    bearer_token: shared.SchemeBearerToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetRequest:
    path_params: GetPathParams = field(default=None)
    security: GetSecurity = field(default=None)
    

@dataclass
class GetResponse:
    content_type: str = field(default=None)
    deletion_response: Optional[shared.DeletionResponse] = field(default=None)
    status_code: int = field(default=None)
    
