from dataclasses import dataclass, field



@dataclass
class GetComparisonShoppingPagesIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetComparisonShoppingPagesIDRequest:
    path_params: GetComparisonShoppingPagesIDPathParams = field(default=None)
    

@dataclass
class GetComparisonShoppingPagesIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
