from dataclasses import dataclass, field



@dataclass
class GetComparisonShoppingPagesIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetComparisonShoppingPagesIDRequest:
    path_params: GetComparisonShoppingPagesIDPathParams = field()
    

@dataclass
class GetComparisonShoppingPagesIDResponse:
    content_type: str = field()
    status_code: int = field()
    
