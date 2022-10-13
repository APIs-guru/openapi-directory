from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateVideoVersionPathParams:
    video_id: float = field(default=None, metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    
class CreateVideoVersionRequestBodyUploadApproachEnum(str, Enum):
    POST = "post"
    PULL = "pull"
    STREAMING = "streaming"
    TUS = "tus"


@dataclass_json
@dataclass
class CreateVideoVersionRequestBodyUpload:
    approach: CreateVideoVersionRequestBodyUploadApproachEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'approach' }})
    link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'link' }})
    redirect_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'redirect_url' }})
    size: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'size' }})
    

@dataclass_json
@dataclass
class CreateVideoVersionRequestBody:
    file_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'file_name' }})
    upload: CreateVideoVersionRequestBodyUpload = field(default=None, metadata={'dataclasses_json': { 'field_name': 'upload' }})
    

@dataclass
class CreateVideoVersionRequest:
    path_params: CreateVideoVersionPathParams = field(default=None)
    request: CreateVideoVersionRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/vnd.vimeo.video.version+json' }})
    

@dataclass
class CreateVideoVersionResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    video_versions: Optional[shared.VideoVersions] = field(default=None)
    
