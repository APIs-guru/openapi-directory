from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GamesAchievementsReadPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GamesAchievementsReadRequest:
    path_params: GamesAchievementsReadPathParams = field(default=None)
    

@dataclass
class GamesAchievementsReadResponse:
    content_type: str = field(default=None)
    parent_achievement: Optional[shared.ParentAchievement] = field(default=None)
    status_code: int = field(default=None)
    
