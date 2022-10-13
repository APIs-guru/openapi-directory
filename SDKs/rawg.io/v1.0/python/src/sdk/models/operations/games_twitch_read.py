from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GamesTwitchReadPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GamesTwitchReadRequest:
    path_params: GamesTwitchReadPathParams = field(default=None)
    

@dataclass
class GamesTwitchReadResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    twitch: Optional[shared.Twitch] = field(default=None)
    
