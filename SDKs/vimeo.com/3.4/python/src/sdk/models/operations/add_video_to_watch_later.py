from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class AddVideoToWatchLaterPathParams:
    user_id: float = field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    video_id: float = field(metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class AddVideoToWatchLaterSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AddVideoToWatchLaterRequest:
    path_params: AddVideoToWatchLaterPathParams = field()
    security: AddVideoToWatchLaterSecurity = field()
    

@dataclass
class AddVideoToWatchLaterResponse:
    content_type: str = field()
    status_code: int = field()
    
