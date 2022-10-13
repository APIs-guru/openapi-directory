from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class UserAPIGetSongListsPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
class UserAPIGetSongListsFieldsEnum(str, Enum):
    NONE = "None"
    DESCRIPTION = "Description"
    EVENTS = "Events"
    MAIN_PICTURE = "MainPicture"
    TAGS = "Tags"

class UserAPIGetSongListsNameMatchModeEnum(str, Enum):
    AUTO = "Auto"
    PARTIAL = "Partial"
    STARTS_WITH = "StartsWith"
    EXACT = "Exact"
    WORDS = "Words"

class UserAPIGetSongListsSortEnum(str, Enum):
    NONE = "None"
    NAME = "Name"
    DATE = "Date"
    CREATE_DATE = "CreateDate"


@dataclass
class UserAPIGetSongListsQueryParams:
    child_tags: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'childTags', 'style': 'form', 'explode': True }})
    fields: Optional[UserAPIGetSongListsFieldsEnum] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    get_total_count: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'getTotalCount', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    name_match_mode: Optional[UserAPIGetSongListsNameMatchModeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'nameMatchMode', 'style': 'form', 'explode': True }})
    query: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    sort: Optional[UserAPIGetSongListsSortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    start: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'start', 'style': 'form', 'explode': True }})
    tag_id: Optional[List[int]] = field(default=None, metadata={'query_param': { 'field_name': 'tagId', 'style': 'form', 'explode': True }})
    

@dataclass
class UserAPIGetSongListsRequest:
    path_params: UserAPIGetSongListsPathParams = field(default=None)
    query_params: UserAPIGetSongListsQueryParams = field(default=None)
    

@dataclass
class UserAPIGetSongListsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    partial_find_result_song_list_for_api_contract_: Optional[shared.PartialFindResultSongListForAPIContract] = field(default=None)
    status_code: int = field(default=None)
    
