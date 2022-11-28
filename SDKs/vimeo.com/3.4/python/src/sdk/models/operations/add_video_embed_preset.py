from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class AddVideoEmbedPresetPathParams:
    preset_id: float = field(metadata={'path_param': { 'field_name': 'preset_id', 'style': 'simple', 'explode': False }})
    video_id: float = field(metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class AddVideoEmbedPresetSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AddVideoEmbedPresetRequest:
    path_params: AddVideoEmbedPresetPathParams = field()
    security: AddVideoEmbedPresetSecurity = field()
    

@dataclass
class AddVideoEmbedPresetResponse:
    content_type: str = field()
    status_code: int = field()
    
