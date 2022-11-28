from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class CreateVideoThumbnailPathParams:
    video_id: float = field(metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateVideoThumbnailRequestBody:
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    time: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('time') }})
    

@dataclass
class CreateVideoThumbnailSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateVideoThumbnailRequest:
    path_params: CreateVideoThumbnailPathParams = field()
    security: CreateVideoThumbnailSecurity = field()
    request: Optional[CreateVideoThumbnailRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/vnd.vimeo.picture+json' }})
    

@dataclass
class CreateVideoThumbnailResponse:
    content_type: str = field()
    status_code: int = field()
    picture: Optional[shared.Picture] = field(default=None)
    
