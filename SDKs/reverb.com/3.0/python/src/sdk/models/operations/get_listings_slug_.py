from dataclasses import dataclass, field
from typing import List


@dataclass
class GetListingsSlugPathParams:
    slug: str = field(default=None, metadata={'path_param': { 'field_name': 'slug', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetListingsSlugRequest:
    path_params: GetListingsSlugPathParams = field(default=None)
    

@dataclass
class GetListingsSlugResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
