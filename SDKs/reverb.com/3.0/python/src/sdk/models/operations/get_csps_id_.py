from dataclasses import dataclass, field



@dataclass
class GetCspsIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCspsIDRequest:
    path_params: GetCspsIDPathParams = field()
    

@dataclass
class GetCspsIDResponse:
    content_type: str = field()
    status_code: int = field()
    
