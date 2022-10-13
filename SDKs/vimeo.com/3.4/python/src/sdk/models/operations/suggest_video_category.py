from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class SuggestVideoCategoryPathParams:
    video_id: float = field(default=None, metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class SuggestVideoCategoryRequestBody:
    category: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'category' }})
    

@dataclass
class SuggestVideoCategorySecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class SuggestVideoCategoryRequest:
    path_params: SuggestVideoCategoryPathParams = field(default=None)
    request: SuggestVideoCategoryRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/vnd.vimeo.category+json' }})
    security: SuggestVideoCategorySecurity = field(default=None)
    

@dataclass
class SuggestVideoCategoryResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    category: Optional[shared.Category] = field(default=None)
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    
