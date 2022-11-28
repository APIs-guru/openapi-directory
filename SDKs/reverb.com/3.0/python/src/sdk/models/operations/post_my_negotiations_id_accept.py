from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class PostMyNegotiationsIDAcceptPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PostMyNegotiationsIDAcceptRequestBody:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class PostMyNegotiationsIDAcceptSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PostMyNegotiationsIDAcceptRequest:
    path_params: PostMyNegotiationsIDAcceptPathParams = field()
    security: PostMyNegotiationsIDAcceptSecurity = field()
    request: Optional[PostMyNegotiationsIDAcceptRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostMyNegotiationsIDAcceptResponse:
    content_type: str = field()
    status_code: int = field()
    
