from dataclasses import dataclass, field
from typing import List


@dataclass
class GetListingsSlugReviewsPathParams:
    slug: str = field(default=None, metadata={'path_param': { 'field_name': 'slug', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetListingsSlugReviewsRequest:
    path_params: GetListingsSlugReviewsPathParams = field(default=None)
    

@dataclass
class GetListingsSlugReviewsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
