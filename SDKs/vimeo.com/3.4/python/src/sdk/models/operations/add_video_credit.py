from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class AddVideoCreditPathParams:
    video_id: float = field(default=None, metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class AddVideoCreditRequestBody:
    email: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    role: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'role' }})
    user_uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user_uri' }})
    

@dataclass
class AddVideoCreditRequest:
    path_params: AddVideoCreditPathParams = field(default=None)
    request: AddVideoCreditRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/vnd.vimeo.credit+json' }})
    

@dataclass
class AddVideoCreditResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    credit: Optional[shared.Credit] = field(default=None)
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    
