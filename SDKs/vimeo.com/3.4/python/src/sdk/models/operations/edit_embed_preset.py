from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class EditEmbedPresetPathParams:
    preset_id: float = field(metadata={'path_param': { 'field_name': 'preset_id', 'style': 'simple', 'explode': False }})
    user_id: float = field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    
class EditEmbedPresetRequestBodyOutroEnum(str, Enum):
    NOTHING = "nothing"


@dataclass_json
@dataclass
class EditEmbedPresetRequestBody:
    outro: Optional[EditEmbedPresetRequestBodyOutroEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outro') }})
    

@dataclass
class EditEmbedPresetRequest:
    path_params: EditEmbedPresetPathParams = field()
    request: Optional[EditEmbedPresetRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/vnd.vimeo.preset+json' }})
    

@dataclass
class EditEmbedPresetResponse:
    content_type: str = field()
    status_code: int = field()
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    presets: Optional[shared.Presets] = field(default=None)
    
