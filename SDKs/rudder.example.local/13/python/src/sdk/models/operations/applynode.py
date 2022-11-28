from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ApplyNodePathParams:
    node_id: str = field(metadata={'path_param': { 'field_name': 'nodeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ApplyNodeRequest:
    path_params: ApplyNodePathParams = field()
    

@dataclass
class ApplyNodeResponse:
    content_type: str = field()
    status_code: int = field()
    apply_node_200_text_plain_string: Optional[str] = field(default=None)
    
