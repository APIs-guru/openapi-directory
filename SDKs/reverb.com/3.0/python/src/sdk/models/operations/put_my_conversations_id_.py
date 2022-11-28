from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class PutMyConversationsIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PutMyConversationsIDRequestBody:
    read: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('read') }})
    

@dataclass
class PutMyConversationsIDSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PutMyConversationsIDRequest:
    path_params: PutMyConversationsIDPathParams = field()
    security: PutMyConversationsIDSecurity = field()
    request: Optional[PutMyConversationsIDRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutMyConversationsIDResponse:
    content_type: str = field()
    status_code: int = field()
    
