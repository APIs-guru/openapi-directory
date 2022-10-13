from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetEmbedPresetAlt1PathParams:
    preset_id: float = field(default=None, metadata={'path_param': { 'field_name': 'preset_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEmbedPresetAlt1Request:
    path_params: GetEmbedPresetAlt1PathParams = field(default=None)
    

@dataclass
class GetEmbedPresetAlt1Response:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    presets: Optional[shared.Presets] = field(default=None)
    
