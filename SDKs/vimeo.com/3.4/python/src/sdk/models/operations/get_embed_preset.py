from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetEmbedPresetPathParams:
    preset_id: float = field(metadata={'path_param': { 'field_name': 'preset_id', 'style': 'simple', 'explode': False }})
    user_id: float = field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEmbedPresetRequest:
    path_params: GetEmbedPresetPathParams = field()
    

@dataclass
class GetEmbedPresetResponse:
    content_type: str = field()
    status_code: int = field()
    presets: Optional[shared.Presets] = field(default=None)
    
