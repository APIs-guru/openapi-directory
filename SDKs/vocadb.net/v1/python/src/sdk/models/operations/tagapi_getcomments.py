from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class TagAPIGetCommentsPathParams:
    tag_id: int = field(default=None, metadata={'path_param': { 'field_name': 'tagId', 'style': 'simple', 'explode': False }})
    

@dataclass
class TagAPIGetCommentsRequest:
    path_params: TagAPIGetCommentsPathParams = field(default=None)
    

@dataclass
class TagAPIGetCommentsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    partial_find_result_comment_for_api_contract_: Optional[shared.PartialFindResultCommentForAPIContract] = field(default=None)
    status_code: int = field(default=None)
    
