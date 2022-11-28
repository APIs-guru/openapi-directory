from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ArtistAPIGetCommentsPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ArtistAPIGetCommentsRequest:
    path_params: ArtistAPIGetCommentsPathParams = field()
    

@dataclass
class ArtistAPIGetCommentsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    comment_for_api_contracts: Optional[List[shared.CommentForAPIContract]] = field(default=None)
    
