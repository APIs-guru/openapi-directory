from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UserAPIGetProfileCommentsPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UserAPIGetProfileCommentsQueryParams:
    get_total_count: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'getTotalCount', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    start: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'start', 'style': 'form', 'explode': True }})
    

@dataclass
class UserAPIGetProfileCommentsRequest:
    path_params: UserAPIGetProfileCommentsPathParams = field()
    query_params: UserAPIGetProfileCommentsQueryParams = field()
    

@dataclass
class UserAPIGetProfileCommentsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    partial_find_result_comment_for_api_contract_: Optional[shared.PartialFindResultCommentForAPIContract] = field(default=None)
    
