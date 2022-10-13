from dataclasses import dataclass, field



@dataclass
class GetProductsSlugReviewsPathParams:
    slug: str = field(default=None, metadata={'path_param': { 'field_name': 'slug', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetProductsSlugReviewsRequest:
    path_params: GetProductsSlugReviewsPathParams = field(default=None)
    

@dataclass
class GetProductsSlugReviewsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
