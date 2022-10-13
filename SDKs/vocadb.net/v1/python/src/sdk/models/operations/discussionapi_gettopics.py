from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared

class DiscussionAPIGetTopicsFieldsEnum(str, Enum):
    NONE = "None"
    COMMENTS = "Comments"
    COMMENT_COUNT = "CommentCount"
    CONTENT = "Content"
    LAST_COMMENT = "LastComment"
    ALL = "All"

class DiscussionAPIGetTopicsSortEnum(str, Enum):
    NONE = "None"
    NAME = "Name"
    DATE_CREATED = "DateCreated"
    LAST_COMMENT_DATE = "LastCommentDate"


@dataclass
class DiscussionAPIGetTopicsQueryParams:
    fields: Optional[DiscussionAPIGetTopicsFieldsEnum] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    folder_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'folderId', 'style': 'form', 'explode': True }})
    get_total_count: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'getTotalCount', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    sort: Optional[DiscussionAPIGetTopicsSortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    start: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'start', 'style': 'form', 'explode': True }})
    

@dataclass
class DiscussionAPIGetTopicsRequest:
    query_params: DiscussionAPIGetTopicsQueryParams = field(default=None)
    

@dataclass
class DiscussionAPIGetTopicsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    partial_find_result_discussion_topic_contract_: Optional[shared.PartialFindResultDiscussionTopicContract] = field(default=None)
    status_code: int = field(default=None)
    
