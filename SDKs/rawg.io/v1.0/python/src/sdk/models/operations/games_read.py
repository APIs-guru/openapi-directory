from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GamesReadPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GamesReadRequest:
    path_params: GamesReadPathParams = field(default=None)
    

@dataclass
class GamesReadResponse:
    content_type: str = field(default=None)
    game_single: Optional[shared.GameSingle] = field(default=None)
    status_code: int = field(default=None)
    
