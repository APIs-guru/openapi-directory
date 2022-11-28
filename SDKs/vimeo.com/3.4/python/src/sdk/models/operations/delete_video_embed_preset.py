from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteVideoEmbedPresetPathParams:
    preset_id: float = field(metadata={'path_param': { 'field_name': 'preset_id', 'style': 'simple', 'explode': False }})
    video_id: float = field(metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteVideoEmbedPresetSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteVideoEmbedPresetRequest:
    path_params: DeleteVideoEmbedPresetPathParams = field()
    security: DeleteVideoEmbedPresetSecurity = field()
    

@dataclass
class DeleteVideoEmbedPresetResponse:
    content_type: str = field()
    status_code: int = field()
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    
