from dataclasses import dataclass, field



@dataclass
class GetListingsSlugReviewsPathParams:
    slug: str = field(metadata={'path_param': { 'field_name': 'slug', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetListingsSlugReviewsRequest:
    path_params: GetListingsSlugReviewsPathParams = field()
    

@dataclass
class GetListingsSlugReviewsResponse:
    content_type: str = field()
    status_code: int = field()
    
