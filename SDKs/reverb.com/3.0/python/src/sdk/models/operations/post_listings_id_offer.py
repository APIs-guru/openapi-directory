from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class PostListingsIDOfferPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PostListingsIDOfferRequestBody:
    price: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('price') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    shipping_price: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shipping_price') }})
    

@dataclass
class PostListingsIDOfferSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PostListingsIDOfferRequest:
    path_params: PostListingsIDOfferPathParams = field()
    security: PostListingsIDOfferSecurity = field()
    request: Optional[PostListingsIDOfferRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostListingsIDOfferResponse:
    content_type: str = field()
    status_code: int = field()
    
