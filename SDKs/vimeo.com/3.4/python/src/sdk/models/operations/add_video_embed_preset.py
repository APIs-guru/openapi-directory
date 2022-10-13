from dataclasses import dataclass, field



@dataclass
class AddVideoEmbedPresetPathParams:
    preset_id: float = field(default=None, metadata={'path_param': { 'field_name': 'preset_id', 'style': 'simple', 'explode': False }})
    video_id: float = field(default=None, metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class AddVideoEmbedPresetSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AddVideoEmbedPresetRequest:
    path_params: AddVideoEmbedPresetPathParams = field(default=None)
    security: AddVideoEmbedPresetSecurity = field(default=None)
    

@dataclass
class AddVideoEmbedPresetResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
