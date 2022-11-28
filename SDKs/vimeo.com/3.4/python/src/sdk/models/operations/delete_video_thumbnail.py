from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class DeleteVideoThumbnailPathParams:
    picture_id: float = field(metadata={'path_param': { 'field_name': 'picture_id', 'style': 'simple', 'explode': False }})
    video_id: float = field(metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteVideoThumbnailSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteVideoThumbnailRequest:
    path_params: DeleteVideoThumbnailPathParams = field()
    security: DeleteVideoThumbnailSecurity = field()
    

@dataclass
class DeleteVideoThumbnailResponse:
    content_type: str = field()
    status_code: int = field()
    
