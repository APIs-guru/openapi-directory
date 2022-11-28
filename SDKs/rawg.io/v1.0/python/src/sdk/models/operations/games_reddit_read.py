from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GamesRedditReadPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GamesRedditReadRequest:
    path_params: GamesRedditReadPathParams = field()
    

@dataclass
class GamesRedditReadResponse:
    content_type: str = field()
    status_code: int = field()
    reddit: Optional[shared.Reddit] = field(default=None)
    
