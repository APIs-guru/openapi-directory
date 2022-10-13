from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass
class PostMyOrdersSellingIDShipPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PostMyOrdersSellingIDShipRequestBody:
    provider: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'provider' }})
    send_notification: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'send_notification' }})
    tracking_number: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tracking_number' }})
    

@dataclass
class PostMyOrdersSellingIDShipSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PostMyOrdersSellingIDShipRequest:
    path_params: PostMyOrdersSellingIDShipPathParams = field(default=None)
    request: Optional[PostMyOrdersSellingIDShipRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PostMyOrdersSellingIDShipSecurity = field(default=None)
    

@dataclass
class PostMyOrdersSellingIDShipResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
