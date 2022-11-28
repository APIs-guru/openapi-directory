from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class DiscussionAPIGetTopicsForFolderPathParams:
    folder_id: int = field(metadata={'path_param': { 'field_name': 'folderId', 'style': 'simple', 'explode': False }})
    
class DiscussionAPIGetTopicsForFolderFieldsEnum(str, Enum):
    NONE = "None"
    COMMENTS = "Comments"
    COMMENT_COUNT = "CommentCount"
    CONTENT = "Content"
    LAST_COMMENT = "LastComment"
    ALL = "All"


@dataclass
class DiscussionAPIGetTopicsForFolderQueryParams:
    fields: Optional[DiscussionAPIGetTopicsForFolderFieldsEnum] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    

@dataclass
class DiscussionAPIGetTopicsForFolderRequest:
    path_params: DiscussionAPIGetTopicsForFolderPathParams = field()
    query_params: DiscussionAPIGetTopicsForFolderQueryParams = field()
    

@dataclass
class DiscussionAPIGetTopicsForFolderResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    discussion_topic_contracts: Optional[List[shared.DiscussionTopicContract]] = field(default=None)
    
