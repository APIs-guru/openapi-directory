from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GamesSuggestedReadPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GamesSuggestedReadRequest:
    path_params: GamesSuggestedReadPathParams = field()
    

@dataclass
class GamesSuggestedReadResponse:
    content_type: str = field()
    status_code: int = field()
    game_single: Optional[shared.GameSingle] = field(default=None)
    
