from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class SongListAPIGetCommentsPathParams:
    list_id: int = field(default=None, metadata={'path_param': { 'field_name': 'listId', 'style': 'simple', 'explode': False }})
    

@dataclass
class SongListAPIGetCommentsRequest:
    path_params: SongListAPIGetCommentsPathParams = field(default=None)
    

@dataclass
class SongListAPIGetCommentsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    partial_find_result_comment_for_api_contract_: Optional[shared.PartialFindResultCommentForAPIContract] = field(default=None)
    status_code: int = field(default=None)
    
