from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class AddVideoCreditAlt1PathParams:
    channel_id: float = field(metadata={'path_param': { 'field_name': 'channel_id', 'style': 'simple', 'explode': False }})
    video_id: float = field(metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class AddVideoCreditAlt1RequestBody:
    email: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    role: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('role') }})
    user_uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('user_uri') }})
    

@dataclass
class AddVideoCreditAlt1Request:
    path_params: AddVideoCreditAlt1PathParams = field()
    request: AddVideoCreditAlt1RequestBody = field(metadata={'request': { 'media_type': 'application/vnd.vimeo.credit+json' }})
    

@dataclass
class AddVideoCreditAlt1Response:
    content_type: str = field()
    status_code: int = field()
    credit: Optional[shared.Credit] = field(default=None)
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    
