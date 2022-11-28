from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class DiscussionAPIGetTopicPathParams:
    topic_id: int = field(metadata={'path_param': { 'field_name': 'topicId', 'style': 'simple', 'explode': False }})
    
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
    path_params: DiscussionAPIGetTopicPathParams = field()
    query_params: DiscussionAPIGetTopicQueryParams = field()
    

@dataclass
class DiscussionAPIGetTopicResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    discussion_topic_contract: Optional[shared.DiscussionTopicContract] = field(default=None)
    
