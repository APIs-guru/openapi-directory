from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared

class DiscussionAPIGetFoldersFieldsEnum(str, Enum):
    NONE = "None"
    LAST_TOPIC = "LastTopic"
    TOPIC_COUNT = "TopicCount"


@dataclass
class DiscussionAPIGetFoldersQueryParams:
    fields: Optional[DiscussionAPIGetFoldersFieldsEnum] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    

@dataclass
class DiscussionAPIGetFoldersRequest:
    query_params: DiscussionAPIGetFoldersQueryParams = field()
    

@dataclass
class DiscussionAPIGetFoldersResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    discussion_folder_contracts: Optional[List[shared.DiscussionFolderContract]] = field(default=None)
    
