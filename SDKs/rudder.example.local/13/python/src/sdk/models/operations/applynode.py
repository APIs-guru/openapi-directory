from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ApplyNodePathParams:
    node_id: str = field(default=None, metadata={'path_param': { 'field_name': 'nodeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ApplyNodeRequest:
    path_params: ApplyNodePathParams = field(default=None)
    

@dataclass
class ApplyNodeResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    apply_node_200_text_plain_string: Optional[str] = field(default=None)
    
