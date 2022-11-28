from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class CreateVideoVersionPathParams:
    video_id: float = field(metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    
class CreateVideoVersionRequestBodyUploadApproachEnum(str, Enum):
    POST = "post"
    PULL = "pull"
    STREAMING = "streaming"
    TUS = "tus"


@dataclass_json
@dataclass
class CreateVideoVersionRequestBodyUpload:
    approach: CreateVideoVersionRequestBodyUploadApproachEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('approach') }})
    link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    redirect_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('redirect_url') }})
    size: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    

@dataclass_json
@dataclass
class CreateVideoVersionRequestBody:
    file_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('file_name') }})
    upload: CreateVideoVersionRequestBodyUpload = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('upload') }})
    

@dataclass
class CreateVideoVersionRequest:
    path_params: CreateVideoVersionPathParams = field()
    request: CreateVideoVersionRequestBody = field(metadata={'request': { 'media_type': 'application/vnd.vimeo.video.version+json' }})
    

@dataclass
class CreateVideoVersionResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    video_versions: Optional[shared.VideoVersions] = field(default=None)
    
