from dataclasses import dataclass, field



@dataclass
class GetFiltersFiltersPathParams:
    filters: str = field(default=None, metadata={'path_param': { 'field_name': 'filters', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetFiltersFiltersRequest:
    path_params: GetFiltersFiltersPathParams = field(default=None)
    

@dataclass
class GetFiltersFiltersResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
