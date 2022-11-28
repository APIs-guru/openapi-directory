from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CheckIfUserIsFollowingAlt1PathParams:
    follow_user_id: float = field(metadata={'path_param': { 'field_name': 'follow_user_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CheckIfUserIsFollowingAlt1Request:
    path_params: CheckIfUserIsFollowingAlt1PathParams = field()
    

@dataclass
class CheckIfUserIsFollowingAlt1Response:
    content_type: str = field()
    status_code: int = field()
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    
