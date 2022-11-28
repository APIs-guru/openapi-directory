from dataclasses import dataclass, field



@dataclass
class DeleteMyCuratedSetProductProductIDPathParams:
    product_id: str = field(metadata={'path_param': { 'field_name': 'product_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteMyCuratedSetProductProductIDRequest:
    path_params: DeleteMyCuratedSetProductProductIDPathParams = field()
    

@dataclass
class DeleteMyCuratedSetProductProductIDResponse:
    content_type: str = field()
    status_code: int = field()
    
