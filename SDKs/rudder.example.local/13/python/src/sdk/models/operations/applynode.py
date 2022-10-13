from dataclasses import dataclass, field



@dataclass
class ApplyNodePathParams:
    node_id: str = field(default=None, metadata={'path_param': { 'field_name': 'nodeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ApplyNodeRequest:
    path_params: ApplyNodePathParams = field(default=None)
    

@dataclass
class ApplyNodeResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
