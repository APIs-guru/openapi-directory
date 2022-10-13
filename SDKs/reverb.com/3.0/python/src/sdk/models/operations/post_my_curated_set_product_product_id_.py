from dataclasses import dataclass, field



@dataclass
class PostMyCuratedSetProductProductIDPathParams:
    product_id: str = field(default=None, metadata={'path_param': { 'field_name': 'product_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostMyCuratedSetProductProductIDRequest:
    path_params: PostMyCuratedSetProductProductIDPathParams = field(default=None)
    

@dataclass
class PostMyCuratedSetProductProductIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
