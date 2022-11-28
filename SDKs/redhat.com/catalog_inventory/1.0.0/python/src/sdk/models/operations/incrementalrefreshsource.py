from dataclasses import dataclass, field



@dataclass
class IncrementalRefreshSourcePathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class IncrementalRefreshSourceRequest:
    path_params: IncrementalRefreshSourcePathParams = field()
    

@dataclass
class IncrementalRefreshSourceResponse:
    content_type: str = field()
    status_code: int = field()
    
