from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class AddVideoToWatchLaterAlt1PathParams:
    video_id: float = field(metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class AddVideoToWatchLaterAlt1Security:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AddVideoToWatchLaterAlt1Request:
    path_params: AddVideoToWatchLaterAlt1PathParams = field()
    security: AddVideoToWatchLaterAlt1Security = field()
    

@dataclass
class AddVideoToWatchLaterAlt1Response:
    content_type: str = field()
    status_code: int = field()
    
