from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GamesSuggestedReadPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GamesSuggestedReadRequest:
    path_params: GamesSuggestedReadPathParams = field(default=None)
    

@dataclass
class GamesSuggestedReadResponse:
    content_type: str = field(default=None)
    game_single: Optional[shared.GameSingle] = field(default=None)
    status_code: int = field(default=None)
    
