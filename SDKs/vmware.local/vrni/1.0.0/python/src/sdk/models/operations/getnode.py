from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetNodePathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNodeSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetNodeRequest:
    path_params: GetNodePathParams = field()
    security: GetNodeSecurity = field()
    

@dataclass
class GetNodeResponse:
    content_type: str = field()
    status_code: int = field()
    node: Optional[shared.Node] = field(default=None)
    
