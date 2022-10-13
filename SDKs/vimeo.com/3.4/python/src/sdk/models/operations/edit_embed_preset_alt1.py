from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class EditEmbedPresetAlt1PathParams:
    preset_id: float = field(default=None, metadata={'path_param': { 'field_name': 'preset_id', 'style': 'simple', 'explode': False }})
    
class EditEmbedPresetAlt1RequestBodyOutroEnum(str, Enum):
    NOTHING = "nothing"


@dataclass_json
@dataclass
class EditEmbedPresetAlt1RequestBody:
    outro: Optional[EditEmbedPresetAlt1RequestBodyOutroEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outro' }})
    

@dataclass
class EditEmbedPresetAlt1Request:
    path_params: EditEmbedPresetAlt1PathParams = field(default=None)
    request: Optional[EditEmbedPresetAlt1RequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/vnd.vimeo.preset+json' }})
    

@dataclass
class EditEmbedPresetAlt1Response:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    presets: Optional[shared.Presets] = field(default=None)
    
