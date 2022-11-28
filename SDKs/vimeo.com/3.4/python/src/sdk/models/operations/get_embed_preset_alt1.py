from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetEmbedPresetAlt1PathParams:
    preset_id: float = field(metadata={'path_param': { 'field_name': 'preset_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEmbedPresetAlt1Request:
    path_params: GetEmbedPresetAlt1PathParams = field()
    

@dataclass
class GetEmbedPresetAlt1Response:
    content_type: str = field()
    status_code: int = field()
    presets: Optional[shared.Presets] = field(default=None)
    
