from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class EditVideoCreditPathParams:
    credit_id: float = field(metadata={'path_param': { 'field_name': 'credit_id', 'style': 'simple', 'explode': False }})
    video_id: float = field(metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class EditVideoCreditRequestBody:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    role: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('role') }})
    

@dataclass
class EditVideoCreditSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class EditVideoCreditRequest:
    path_params: EditVideoCreditPathParams = field()
    security: EditVideoCreditSecurity = field()
    request: Optional[EditVideoCreditRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/vnd.vimeo.credit+json' }})
    

@dataclass
class EditVideoCreditResponse:
    content_type: str = field()
    status_code: int = field()
    credit: Optional[shared.Credit] = field(default=None)
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    
