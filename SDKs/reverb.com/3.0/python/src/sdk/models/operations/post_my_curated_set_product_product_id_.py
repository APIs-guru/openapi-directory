from dataclasses import dataclass, field



@dataclass
class PostMyCuratedSetProductProductIDPathParams:
    product_id: str = field(metadata={'path_param': { 'field_name': 'product_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostMyCuratedSetProductProductIDRequest:
    path_params: PostMyCuratedSetProductProductIDPathParams = field()
    

@dataclass
class PostMyCuratedSetProductProductIDResponse:
    content_type: str = field()
    status_code: int = field()
    
