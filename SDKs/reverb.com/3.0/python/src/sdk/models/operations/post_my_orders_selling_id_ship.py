from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class PostMyOrdersSellingIDShipPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PostMyOrdersSellingIDShipRequestBody:
    provider: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('provider') }})
    send_notification: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('send_notification') }})
    tracking_number: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('tracking_number') }})
    

@dataclass
class PostMyOrdersSellingIDShipSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PostMyOrdersSellingIDShipRequest:
    path_params: PostMyOrdersSellingIDShipPathParams = field()
    security: PostMyOrdersSellingIDShipSecurity = field()
    request: Optional[PostMyOrdersSellingIDShipRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostMyOrdersSellingIDShipResponse:
    content_type: str = field()
    status_code: int = field()
    
