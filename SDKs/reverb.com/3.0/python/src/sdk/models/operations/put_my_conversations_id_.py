from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass
class PutMyConversationsIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PutMyConversationsIDRequestBody:
    read: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'read' }})
    

@dataclass
class PutMyConversationsIDSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PutMyConversationsIDRequest:
    path_params: PutMyConversationsIDPathParams = field(default=None)
    request: Optional[PutMyConversationsIDRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PutMyConversationsIDSecurity = field(default=None)
    

@dataclass
class PutMyConversationsIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
