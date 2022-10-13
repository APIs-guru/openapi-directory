from dataclasses import dataclass, field



@dataclass
class DeleteVideoThumbnailPathParams:
    picture_id: float = field(default=None, metadata={'path_param': { 'field_name': 'picture_id', 'style': 'simple', 'explode': False }})
    video_id: float = field(default=None, metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteVideoThumbnailSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteVideoThumbnailRequest:
    path_params: DeleteVideoThumbnailPathParams = field(default=None)
    security: DeleteVideoThumbnailSecurity = field(default=None)
    

@dataclass
class DeleteVideoThumbnailResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
