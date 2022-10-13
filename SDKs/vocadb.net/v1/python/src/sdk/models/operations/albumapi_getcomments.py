from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class AlbumAPIGetCommentsPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class AlbumAPIGetCommentsRequest:
    path_params: AlbumAPIGetCommentsPathParams = field(default=None)
    

@dataclass
class AlbumAPIGetCommentsResponse:
    body: bytes = field(default=None)
    comment_for_api_contracts: Optional[List[shared.CommentForAPIContract]] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
