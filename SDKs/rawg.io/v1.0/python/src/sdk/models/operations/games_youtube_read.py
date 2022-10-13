from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GamesYoutubeReadPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GamesYoutubeReadRequest:
    path_params: GamesYoutubeReadPathParams = field(default=None)
    

@dataclass
class GamesYoutubeReadResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    youtube: Optional[shared.Youtube] = field(default=None)
    
