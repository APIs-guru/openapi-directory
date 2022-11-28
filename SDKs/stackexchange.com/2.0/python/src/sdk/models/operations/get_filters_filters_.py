from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetFiltersFiltersPathParams:
    filters: str = field(metadata={'path_param': { 'field_name': 'filters', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetFiltersFiltersRequest:
    path_params: GetFiltersFiltersPathParams = field()
    

@dataclass
class GetFiltersFiltersResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
