from dataclasses import dataclass, field
from typing import List


@dataclass
class PostListingsSlugReviewsPathParams:
    slug: str = field(default=None, metadata={'path_param': { 'field_name': 'slug', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostListingsSlugReviewsSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PostListingsSlugReviewsRequest:
    path_params: PostListingsSlugReviewsPathParams = field(default=None)
    security: PostListingsSlugReviewsSecurity = field(default=None)
    

@dataclass
class PostListingsSlugReviewsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
