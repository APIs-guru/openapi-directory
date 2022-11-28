from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class AddVideoCreditPathParams:
    video_id: float = field(metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class AddVideoCreditRequestBody:
    email: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    role: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('role') }})
    user_uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('user_uri') }})
    

@dataclass
class AddVideoCreditRequest:
    path_params: AddVideoCreditPathParams = field()
    request: AddVideoCreditRequestBody = field(metadata={'request': { 'media_type': 'application/vnd.vimeo.credit+json' }})
    

@dataclass
class AddVideoCreditResponse:
    content_type: str = field()
    status_code: int = field()
    credit: Optional[shared.Credit] = field(default=None)
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    
