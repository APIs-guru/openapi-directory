from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class PostListingsSlugReviewsPathParams:
    slug: str = field(metadata={'path_param': { 'field_name': 'slug', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostListingsSlugReviewsSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PostListingsSlugReviewsRequest:
    path_params: PostListingsSlugReviewsPathParams = field()
    security: PostListingsSlugReviewsSecurity = field()
    

@dataclass
class PostListingsSlugReviewsResponse:
    content_type: str = field()
    status_code: int = field()
    
