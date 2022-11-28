from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class UnfollowUserAlt1PathParams:
    follow_user_id: float = field(metadata={'path_param': { 'field_name': 'follow_user_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UnfollowUserAlt1Security:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UnfollowUserAlt1Request:
    path_params: UnfollowUserAlt1PathParams = field()
    security: UnfollowUserAlt1Security = field()
    

@dataclass
class UnfollowUserAlt1Response:
    content_type: str = field()
    status_code: int = field()
    
