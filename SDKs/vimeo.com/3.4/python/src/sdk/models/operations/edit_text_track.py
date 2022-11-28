from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class EditTextTrackPathParams:
    texttrack_id: float = field(metadata={'path_param': { 'field_name': 'texttrack_id', 'style': 'simple', 'explode': False }})
    video_id: float = field(metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    
class EditTextTrackRequestBodyTypeEnum(str, Enum):
    CAPTIONS = "captions"
    CHAPTERS = "chapters"
    DESCRIPTIONS = "descriptions"
    METADATA = "metadata"
    SUBTITLES = "subtitles"


@dataclass_json
@dataclass
class EditTextTrackRequestBody:
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('language') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    type: Optional[EditTextTrackRequestBodyTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass
class EditTextTrackSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class EditTextTrackRequest:
    path_params: EditTextTrackPathParams = field()
    security: EditTextTrackSecurity = field()
    request: Optional[EditTextTrackRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/vnd.vimeo.video.texttrack+json' }})
    

@dataclass
class EditTextTrackResponse:
    content_type: str = field()
    status_code: int = field()
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    text_track: Optional[shared.TextTrack] = field(default=None)
    
