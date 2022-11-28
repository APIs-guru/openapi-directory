from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetVideoEmbedPresetPathParams:
    preset_id: float = field(metadata={'path_param': { 'field_name': 'preset_id', 'style': 'simple', 'explode': False }})
    video_id: float = field(metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetVideoEmbedPresetRequest:
    path_params: GetVideoEmbedPresetPathParams = field()
    

@dataclass
class GetVideoEmbedPresetResponse:
    content_type: str = field()
    status_code: int = field()
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    
