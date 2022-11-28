from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetShopsSlugPathParams:
    slug: str = field(metadata={'path_param': { 'field_name': 'slug', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetShopsSlugQueryParams:
    include_listing_count: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'include_listing_count', 'style': 'form', 'explode': True }})
    

@dataclass
class GetShopsSlugRequest:
    path_params: GetShopsSlugPathParams = field()
    query_params: GetShopsSlugQueryParams = field()
    

@dataclass
class GetShopsSlugResponse:
    content_type: str = field()
    status_code: int = field()
    
