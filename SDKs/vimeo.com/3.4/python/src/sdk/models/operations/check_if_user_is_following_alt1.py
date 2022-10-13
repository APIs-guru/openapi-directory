from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CheckIfUserIsFollowingAlt1PathParams:
    follow_user_id: float = field(default=None, metadata={'path_param': { 'field_name': 'follow_user_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CheckIfUserIsFollowingAlt1Request:
    path_params: CheckIfUserIsFollowingAlt1PathParams = field(default=None)
    

@dataclass
class CheckIfUserIsFollowingAlt1Response:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    
