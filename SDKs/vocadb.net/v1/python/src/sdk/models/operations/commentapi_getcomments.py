from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
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
    entry_type: CommentAPIGetCommentsEntryTypeEnum = field(metadata={'path_param': { 'field_name': 'entryType', 'style': 'simple', 'explode': False }})
    

@dataclass
class CommentAPIGetCommentsQueryParams:
    entry_id: int = field(metadata={'query_param': { 'field_name': 'entryId', 'style': 'form', 'explode': True }})
    

@dataclass
class CommentAPIGetCommentsRequest:
    path_params: CommentAPIGetCommentsPathParams = field()
    query_params: CommentAPIGetCommentsQueryParams = field()
    

@dataclass
class CommentAPIGetCommentsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    partial_find_result_comment_for_api_contract_: Optional[shared.PartialFindResultCommentForAPIContract] = field(default=None)
    
