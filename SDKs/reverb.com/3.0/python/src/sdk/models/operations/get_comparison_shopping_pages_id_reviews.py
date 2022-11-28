from dataclasses import dataclass, field



@dataclass
class GetComparisonShoppingPagesIDReviewsPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetComparisonShoppingPagesIDReviewsRequest:
    path_params: GetComparisonShoppingPagesIDReviewsPathParams = field()
    

@dataclass
class GetComparisonShoppingPagesIDReviewsResponse:
    content_type: str = field()
    status_code: int = field()
    
