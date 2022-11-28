from dataclasses import dataclass, field



@dataclass
class RefreshSourcePathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RefreshSourceRequest:
    path_params: RefreshSourcePathParams = field()
    

@dataclass
class RefreshSourceResponse:
    content_type: str = field()
    status_code: int = field()
    
