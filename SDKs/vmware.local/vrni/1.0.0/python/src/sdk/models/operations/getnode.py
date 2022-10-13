from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetNodePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNodeSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetNodeRequest:
    path_params: GetNodePathParams = field(default=None)
    security: GetNodeSecurity = field(default=None)
    

@dataclass
class GetNodeResponse:
    content_type: str = field(default=None)
    node: Optional[shared.Node] = field(default=None)
    status_code: int = field(default=None)
    
