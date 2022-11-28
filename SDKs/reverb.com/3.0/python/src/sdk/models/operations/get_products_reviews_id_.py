from dataclasses import dataclass, field



@dataclass
class GetProductsReviewsIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetProductsReviewsIDRequest:
    path_params: GetProductsReviewsIDPathParams = field()
    

@dataclass
class GetProductsReviewsIDResponse:
    content_type: str = field()
    status_code: int = field()
    
