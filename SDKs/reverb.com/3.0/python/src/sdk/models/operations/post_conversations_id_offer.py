from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass
class PostConversationsIDOfferPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PostConversationsIDOfferRequestBody:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    price: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price' }})
    shipping_price: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shipping_price' }})
    

@dataclass
class PostConversationsIDOfferSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PostConversationsIDOfferRequest:
    path_params: PostConversationsIDOfferPathParams = field(default=None)
    request: Optional[PostConversationsIDOfferRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PostConversationsIDOfferSecurity = field(default=None)
    

@dataclass
class PostConversationsIDOfferResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
