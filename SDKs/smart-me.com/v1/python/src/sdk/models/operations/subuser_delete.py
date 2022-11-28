from dataclasses import dataclass, field



@dataclass
class SubUserDeletePathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class SubUserDeleteRequest:
    path_params: SubUserDeletePathParams = field()
    

@dataclass
class SubUserDeleteResponse:
    content_type: str = field()
    status_code: int = field()
    
