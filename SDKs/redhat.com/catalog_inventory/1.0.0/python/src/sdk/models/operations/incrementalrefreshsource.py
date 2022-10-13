from dataclasses import dataclass, field



@dataclass
class IncrementalRefreshSourcePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class IncrementalRefreshSourceRequest:
    path_params: IncrementalRefreshSourcePathParams = field(default=None)
    

@dataclass
class IncrementalRefreshSourceResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
