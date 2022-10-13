from dataclasses import dataclass, field



@dataclass
class GetComparisonShoppingPagesIDReviewsPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetComparisonShoppingPagesIDReviewsRequest:
    path_params: GetComparisonShoppingPagesIDReviewsPathParams = field(default=None)
    

@dataclass
class GetComparisonShoppingPagesIDReviewsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
