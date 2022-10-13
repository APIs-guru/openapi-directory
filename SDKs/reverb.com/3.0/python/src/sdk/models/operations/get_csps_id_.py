from dataclasses import dataclass, field



@dataclass
class GetCspsIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCspsIDRequest:
    path_params: GetCspsIDPathParams = field(default=None)
    

@dataclass
class GetCspsIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
