from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class AddVideoTagsPathParams:
    video_id: float = field(metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class AddVideoTagsRequestBody:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    page: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('page') }})
    per_page: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('per_page') }})
    

@dataclass
class AddVideoTagsSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AddVideoTagsRequest:
    path_params: AddVideoTagsPathParams = field()
    request: AddVideoTagsRequestBody = field(metadata={'request': { 'media_type': 'application/vnd.vimeo.tag+json' }})
    security: AddVideoTagsSecurity = field()
    

@dataclass
class AddVideoTagsResponse:
    content_type: str = field()
    status_code: int = field()
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    tags: Optional[List[shared.Tag]] = field(default=None)
    
