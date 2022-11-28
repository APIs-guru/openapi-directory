from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class DeleteVideoFromWatchLaterAlt1PathParams:
    video_id: float = field(metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteVideoFromWatchLaterAlt1Security:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteVideoFromWatchLaterAlt1Request:
    path_params: DeleteVideoFromWatchLaterAlt1PathParams = field()
    security: DeleteVideoFromWatchLaterAlt1Security = field()
    

@dataclass
class DeleteVideoFromWatchLaterAlt1Response:
    content_type: str = field()
    status_code: int = field()
    
