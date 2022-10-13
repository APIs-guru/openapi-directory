from dataclasses import dataclass, field



@dataclass
class RefreshSourcePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RefreshSourceRequest:
    path_params: RefreshSourcePathParams = field(default=None)
    

@dataclass
class RefreshSourceResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
