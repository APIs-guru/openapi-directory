from dataclasses import dataclass, field



@dataclass
class DeleteVideoFromWatchLaterAlt1PathParams:
    video_id: float = field(default=None, metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteVideoFromWatchLaterAlt1Security:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteVideoFromWatchLaterAlt1Request:
    path_params: DeleteVideoFromWatchLaterAlt1PathParams = field(default=None)
    security: DeleteVideoFromWatchLaterAlt1Security = field(default=None)
    

@dataclass
class DeleteVideoFromWatchLaterAlt1Response:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
