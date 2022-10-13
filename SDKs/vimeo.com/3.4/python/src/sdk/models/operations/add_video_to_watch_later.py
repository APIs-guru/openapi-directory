from dataclasses import dataclass, field



@dataclass
class AddVideoToWatchLaterPathParams:
    user_id: float = field(default=None, metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    video_id: float = field(default=None, metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class AddVideoToWatchLaterSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AddVideoToWatchLaterRequest:
    path_params: AddVideoToWatchLaterPathParams = field(default=None)
    security: AddVideoToWatchLaterSecurity = field(default=None)
    

@dataclass
class AddVideoToWatchLaterResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
