from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteVideoFromVodPathParams:
    ondemand_id: float = field(default=None, metadata={'path_param': { 'field_name': 'ondemand_id', 'style': 'simple', 'explode': False }})
    video_id: float = field(default=None, metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteVideoFromVodSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteVideoFromVodRequest:
    path_params: DeleteVideoFromVodPathParams = field(default=None)
    security: DeleteVideoFromVodSecurity = field(default=None)
    

@dataclass
class DeleteVideoFromVodResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    
