from dataclasses import dataclass, field



@dataclass
class SubUserDeletePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class SubUserDeleteRequest:
    path_params: SubUserDeletePathParams = field(default=None)
    

@dataclass
class SubUserDeleteResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
