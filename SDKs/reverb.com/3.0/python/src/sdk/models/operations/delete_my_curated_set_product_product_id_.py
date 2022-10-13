from dataclasses import dataclass, field



@dataclass
class DeleteMyCuratedSetProductProductIDPathParams:
    product_id: str = field(default=None, metadata={'path_param': { 'field_name': 'product_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteMyCuratedSetProductProductIDRequest:
    path_params: DeleteMyCuratedSetProductProductIDPathParams = field(default=None)
    

@dataclass
class DeleteMyCuratedSetProductProductIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
