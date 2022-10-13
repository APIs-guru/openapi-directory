from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared

class CommentAPIGetCommentsEntryTypeEnum(str, Enum):
    UNDEFINED = "Undefined"
    ALBUM = "Album"
    ARTIST = "Artist"
    DISCUSSION_TOPIC = "DiscussionTopic"
    PV = "PV"
    RELEASE_EVENT = "ReleaseEvent"
    RELEASE_EVENT_SERIES = "ReleaseEventSeries"
    SONG = "Song"
    SONG_LIST = "SongList"
    TAG = "Tag"
    USER = "User"
    VENUE = "Venue"


@dataclass
class CommentAPIGetCommentsPathParams:
    entry_type: CommentAPIGetCommentsEntryTypeEnum = field(default=None, metadata={'path_param': { 'field_name': 'entryType', 'style': 'simple', 'explode': False }})
    

@dataclass
class CommentAPIGetCommentsQueryParams:
    entry_id: int = field(default=None, metadata={'query_param': { 'field_name': 'entryId', 'style': 'form', 'explode': True }})
    

@dataclass
class CommentAPIGetCommentsRequest:
    path_params: CommentAPIGetCommentsPathParams = field(default=None)
    query_params: CommentAPIGetCommentsQueryParams = field(default=None)
    

@dataclass
class CommentAPIGetCommentsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    partial_find_result_comment_for_api_contract_: Optional[shared.PartialFindResultCommentForAPIContract] = field(default=None)
    status_code: int = field(default=None)
    
