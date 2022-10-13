from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class AddVideoCreditAlt1PathParams:
    channel_id: float = field(default=None, metadata={'path_param': { 'field_name': 'channel_id', 'style': 'simple', 'explode': False }})
    video_id: float = field(default=None, metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class AddVideoCreditAlt1RequestBody:
    email: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    role: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'role' }})
    user_uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user_uri' }})
    

@dataclass
class AddVideoCreditAlt1Request:
    path_params: AddVideoCreditAlt1PathParams = field(default=None)
    request: AddVideoCreditAlt1RequestBody = field(default=None, metadata={'request': { 'media_type': 'application/vnd.vimeo.credit+json' }})
    

@dataclass
class AddVideoCreditAlt1Response:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    credit: Optional[shared.Credit] = field(default=None)
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    
