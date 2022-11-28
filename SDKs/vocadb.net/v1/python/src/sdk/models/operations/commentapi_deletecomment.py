from dataclasses import dataclass, field
from enum import Enum

class CommentAPIDeleteCommentEntryTypeEnum(str, Enum):
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
class CommentAPIDeleteCommentPathParams:
    comment_id: int = field(metadata={'path_param': { 'field_name': 'commentId', 'style': 'simple', 'explode': False }})
    entry_type: CommentAPIDeleteCommentEntryTypeEnum = field(metadata={'path_param': { 'field_name': 'entryType', 'style': 'simple', 'explode': False }})
    

@dataclass
class CommentAPIDeleteCommentRequest:
    path_params: CommentAPIDeleteCommentPathParams = field()
    

@dataclass
class CommentAPIDeleteCommentResponse:
    content_type: str = field()
    status_code: int = field()
    
