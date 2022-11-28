from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GamesTwitchReadPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GamesTwitchReadRequest:
    path_params: GamesTwitchReadPathParams = field()
    

@dataclass
class GamesTwitchReadResponse:
    content_type: str = field()
    status_code: int = field()
    twitch: Optional[shared.Twitch] = field(default=None)
    
