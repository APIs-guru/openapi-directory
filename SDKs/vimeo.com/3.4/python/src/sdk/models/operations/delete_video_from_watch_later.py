from dataclasses import dataclass, field



@dataclass
class DeleteVideoFromWatchLaterPathParams:
    user_id: float = field(default=None, metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    video_id: float = field(default=None, metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteVideoFromWatchLaterSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteVideoFromWatchLaterRequest:
    path_params: DeleteVideoFromWatchLaterPathParams = field(default=None)
    security: DeleteVideoFromWatchLaterSecurity = field(default=None)
    

@dataclass
class DeleteVideoFromWatchLaterResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
