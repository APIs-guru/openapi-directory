from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GamesRedditReadPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GamesRedditReadRequest:
    path_params: GamesRedditReadPathParams = field(default=None)
    

@dataclass
class GamesRedditReadResponse:
    content_type: str = field(default=None)
    reddit: Optional[shared.Reddit] = field(default=None)
    status_code: int = field(default=None)
    
