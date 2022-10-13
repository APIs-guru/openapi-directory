from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetEmbedPresetPathParams:
    preset_id: float = field(default=None, metadata={'path_param': { 'field_name': 'preset_id', 'style': 'simple', 'explode': False }})
    user_id: float = field(default=None, metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEmbedPresetRequest:
    path_params: GetEmbedPresetPathParams = field(default=None)
    

@dataclass
class GetEmbedPresetResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    presets: Optional[shared.Presets] = field(default=None)
    
