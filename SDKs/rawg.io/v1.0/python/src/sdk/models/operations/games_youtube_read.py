from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GamesYoutubeReadPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GamesYoutubeReadRequest:
    path_params: GamesYoutubeReadPathParams = field()
    

@dataclass
class GamesYoutubeReadResponse:
    content_type: str = field()
    status_code: int = field()
    youtube: Optional[shared.Youtube] = field(default=None)
    
