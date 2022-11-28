from dataclasses import dataclass, field



@dataclass
class GetProductsSlugReviewsPathParams:
    slug: str = field(metadata={'path_param': { 'field_name': 'slug', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetProductsSlugReviewsRequest:
    path_params: GetProductsSlugReviewsPathParams = field()
    

@dataclass
class GetProductsSlugReviewsResponse:
    content_type: str = field()
    status_code: int = field()
    
