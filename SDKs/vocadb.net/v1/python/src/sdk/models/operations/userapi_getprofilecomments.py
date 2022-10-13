from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UserAPIGetProfileCommentsPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UserAPIGetProfileCommentsQueryParams:
    get_total_count: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'getTotalCount', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    start: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'start', 'style': 'form', 'explode': True }})
    

@dataclass
class UserAPIGetProfileCommentsRequest:
    path_params: UserAPIGetProfileCommentsPathParams = field(default=None)
    query_params: UserAPIGetProfileCommentsQueryParams = field(default=None)
    

@dataclass
class UserAPIGetProfileCommentsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    partial_find_result_comment_for_api_contract_: Optional[shared.PartialFindResultCommentForAPIContract] = field(default=None)
    status_code: int = field(default=None)
    
