from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass
class PostMyNegotiationsIDAcceptPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PostMyNegotiationsIDAcceptRequestBody:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class PostMyNegotiationsIDAcceptSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PostMyNegotiationsIDAcceptRequest:
    path_params: PostMyNegotiationsIDAcceptPathParams = field(default=None)
    request: Optional[PostMyNegotiationsIDAcceptRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PostMyNegotiationsIDAcceptSecurity = field(default=None)
    

@dataclass
class PostMyNegotiationsIDAcceptResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
