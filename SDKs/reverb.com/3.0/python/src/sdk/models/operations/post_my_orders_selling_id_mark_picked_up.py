from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass
class PostMyOrdersSellingIDMarkPickedUpPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PostMyOrdersSellingIDMarkPickedUpRequestBody:
    date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date' }})
    

@dataclass
class PostMyOrdersSellingIDMarkPickedUpSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PostMyOrdersSellingIDMarkPickedUpRequest:
    path_params: PostMyOrdersSellingIDMarkPickedUpPathParams = field(default=None)
    request: Optional[PostMyOrdersSellingIDMarkPickedUpRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PostMyOrdersSellingIDMarkPickedUpSecurity = field(default=None)
    

@dataclass
class PostMyOrdersSellingIDMarkPickedUpResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
