from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class PostConversationsIDOfferPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PostConversationsIDOfferRequestBody:
    price: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('price') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    shipping_price: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shipping_price') }})
    

@dataclass
class PostConversationsIDOfferSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PostConversationsIDOfferRequest:
    path_params: PostConversationsIDOfferPathParams = field()
    security: PostConversationsIDOfferSecurity = field()
    request: Optional[PostConversationsIDOfferRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostConversationsIDOfferResponse:
    content_type: str = field()
    status_code: int = field()
    
