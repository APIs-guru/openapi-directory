from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class PostProductsSlugReviewsPathParams:
    slug: str = field(metadata={'path_param': { 'field_name': 'slug', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostProductsSlugReviewsSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PostProductsSlugReviewsRequest:
    path_params: PostProductsSlugReviewsPathParams = field()
    security: PostProductsSlugReviewsSecurity = field()
    

@dataclass
class PostProductsSlugReviewsResponse:
    content_type: str = field()
    status_code: int = field()
    
