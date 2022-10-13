from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class DiscussionAPIGetTopicsForFolderPathParams:
    folder_id: int = field(default=None, metadata={'path_param': { 'field_name': 'folderId', 'style': 'simple', 'explode': False }})
    
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
    path_params: DiscussionAPIGetTopicsForFolderPathParams = field(default=None)
    query_params: DiscussionAPIGetTopicsForFolderQueryParams = field(default=None)
    

@dataclass
class DiscussionAPIGetTopicsForFolderResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    discussion_topic_contracts: Optional[List[shared.DiscussionTopicContract]] = field(default=None)
    status_code: int = field(default=None)
    
