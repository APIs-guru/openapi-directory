from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ArtistAPIGetCommentsPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ArtistAPIGetCommentsRequest:
    path_params: ArtistAPIGetCommentsPathParams = field(default=None)
    

@dataclass
class ArtistAPIGetCommentsResponse:
    body: bytes = field(default=None)
    comment_for_api_contracts: Optional[List[shared.CommentForAPIContract]] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
