from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class SuggestVideoCategoryPathParams:
    video_id: float = field(metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class SuggestVideoCategoryRequestBody:
    category: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('category') }})
    

@dataclass
class SuggestVideoCategorySecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class SuggestVideoCategoryRequest:
    path_params: SuggestVideoCategoryPathParams = field()
    request: SuggestVideoCategoryRequestBody = field(metadata={'request': { 'media_type': 'application/vnd.vimeo.category+json' }})
    security: SuggestVideoCategorySecurity = field()
    

@dataclass
class SuggestVideoCategoryResponse:
    content_type: str = field()
    status_code: int = field()
    category: Optional[shared.Category] = field(default=None)
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    
