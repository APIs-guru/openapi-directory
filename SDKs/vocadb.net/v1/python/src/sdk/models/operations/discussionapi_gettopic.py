from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared


@dataclass
class DiscussionAPIGetTopicPathParams:
    topic_id: int = field(default=None, metadata={'path_param': { 'field_name': 'topicId', 'style': 'simple', 'explode': False }})
    
class DiscussionAPIGetTopicFieldsEnum(str, Enum):
    NONE = "None"
    COMMENTS = "Comments"
    COMMENT_COUNT = "CommentCount"
    CONTENT = "Content"
    LAST_COMMENT = "LastComment"
    ALL = "All"


@dataclass
class DiscussionAPIGetTopicQueryParams:
    fields: Optional[DiscussionAPIGetTopicFieldsEnum] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    

@dataclass
class DiscussionAPIGetTopicRequest:
    path_params: DiscussionAPIGetTopicPathParams = field(default=None)
    query_params: DiscussionAPIGetTopicQueryParams = field(default=None)
    

@dataclass
class DiscussionAPIGetTopicResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    discussion_topic_contract: Optional[shared.DiscussionTopicContract] = field(default=None)
    status_code: int = field(default=None)
    
