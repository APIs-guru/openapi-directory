from dataclasses import dataclass, field



@dataclass
class AddVideoToWatchLaterAlt1PathParams:
    video_id: float = field(default=None, metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class AddVideoToWatchLaterAlt1Security:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AddVideoToWatchLaterAlt1Request:
    path_params: AddVideoToWatchLaterAlt1PathParams = field(default=None)
    security: AddVideoToWatchLaterAlt1Security = field(default=None)
    

@dataclass
class AddVideoToWatchLaterAlt1Response:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
