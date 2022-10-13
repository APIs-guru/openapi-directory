from dataclasses import dataclass, field
from typing import List


@dataclass
class GetListingsSlugSimilarListingsPathParams:
    slug: str = field(default=None, metadata={'path_param': { 'field_name': 'slug', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetListingsSlugSimilarListingsRequest:
    path_params: GetListingsSlugSimilarListingsPathParams = field(default=None)
    

@dataclass
class GetListingsSlugSimilarListingsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
