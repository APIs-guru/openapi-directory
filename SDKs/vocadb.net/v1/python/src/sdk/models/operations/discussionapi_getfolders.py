from dataclasses import dataclass, field
from typing import Enum,List,Optional
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
    query_params: DiscussionAPIGetFoldersQueryParams = field(default=None)
    

@dataclass
class DiscussionAPIGetFoldersResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    discussion_folder_contracts: Optional[List[shared.DiscussionFolderContract]] = field(default=None)
    status_code: int = field(default=None)
    
