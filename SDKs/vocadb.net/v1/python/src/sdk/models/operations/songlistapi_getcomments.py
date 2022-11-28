from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class SongListAPIGetCommentsPathParams:
    list_id: int = field(metadata={'path_param': { 'field_name': 'listId', 'style': 'simple', 'explode': False }})
    

@dataclass
class SongListAPIGetCommentsRequest:
    path_params: SongListAPIGetCommentsPathParams = field()
    

@dataclass
class SongListAPIGetCommentsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    partial_find_result_comment_for_api_contract_: Optional[shared.PartialFindResultCommentForAPIContract] = field(default=None)
    
