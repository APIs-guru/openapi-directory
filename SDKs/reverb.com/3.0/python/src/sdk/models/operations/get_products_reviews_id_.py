from dataclasses import dataclass, field



@dataclass
class GetProductsReviewsIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetProductsReviewsIDRequest:
    path_params: GetProductsReviewsIDPathParams = field(default=None)
    

@dataclass
class GetProductsReviewsIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
