from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class AddVideoTagsPathParams:
    video_id: float = field(default=None, metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class AddVideoTagsRequestBody:
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    page: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'page' }})
    per_page: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'per_page' }})
    

@dataclass
class AddVideoTagsSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AddVideoTagsRequest:
    path_params: AddVideoTagsPathParams = field(default=None)
    request: AddVideoTagsRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/vnd.vimeo.tag+json' }})
    security: AddVideoTagsSecurity = field(default=None)
    

@dataclass
class AddVideoTagsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    tags: Optional[List[shared.Tag]] = field(default=None)
    
