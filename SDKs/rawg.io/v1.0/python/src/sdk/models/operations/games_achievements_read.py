from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GamesAchievementsReadPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GamesAchievementsReadRequest:
    path_params: GamesAchievementsReadPathParams = field()
    

@dataclass
class GamesAchievementsReadResponse:
    content_type: str = field()
    status_code: int = field()
    parent_achievement: Optional[shared.ParentAchievement] = field(default=None)
    
