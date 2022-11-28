from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class FollowUserAlt1PathParams:
    follow_user_id: float = field(metadata={'path_param': { 'field_name': 'follow_user_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class FollowUserAlt1Security:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FollowUserAlt1Request:
    path_params: FollowUserAlt1PathParams = field()
    security: FollowUserAlt1Security = field()
    

@dataclass
class FollowUserAlt1Response:
    content_type: str = field()
    status_code: int = field()
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    
