from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass
class PostListingsIDOfferPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PostListingsIDOfferRequestBody:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    price: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price' }})
    shipping_price: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shipping_price' }})
    

@dataclass
class PostListingsIDOfferSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PostListingsIDOfferRequest:
    path_params: PostListingsIDOfferPathParams = field(default=None)
    request: Optional[PostListingsIDOfferRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PostListingsIDOfferSecurity = field(default=None)
    

@dataclass
class PostListingsIDOfferResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
