from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetCommentRepliesPathParams:
    comment_id: float = field(default=None, metadata={'path_param': { 'field_name': 'comment_id', 'style': 'simple', 'explode': False }})
    video_id: float = field(default=None, metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCommentRepliesQueryParams:
    page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCommentRepliesRequest:
    path_params: GetCommentRepliesPathParams = field(default=None)
    query_params: GetCommentRepliesQueryParams = field(default=None)
    

@dataclass
class GetCommentRepliesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    comments: Optional[List[shared.Comment]] = field(default=None)
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    
