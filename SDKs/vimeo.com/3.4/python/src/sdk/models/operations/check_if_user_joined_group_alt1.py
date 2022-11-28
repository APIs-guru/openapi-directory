from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CheckIfUserJoinedGroupAlt1PathParams:
    group_id: float = field(metadata={'path_param': { 'field_name': 'group_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CheckIfUserJoinedGroupAlt1Request:
    path_params: CheckIfUserJoinedGroupAlt1PathParams = field()
    

@dataclass
class CheckIfUserJoinedGroupAlt1Response:
    content_type: str = field()
    status_code: int = field()
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    
