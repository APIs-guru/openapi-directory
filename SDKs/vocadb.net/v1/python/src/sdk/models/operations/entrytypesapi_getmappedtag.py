from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared

class EntryTypesAPIGetMappedTagEntryTypeEnum(str, Enum):
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
class EntryTypesAPIGetMappedTagPathParams:
    entry_type: EntryTypesAPIGetMappedTagEntryTypeEnum = field(metadata={'path_param': { 'field_name': 'entryType', 'style': 'simple', 'explode': False }})
    sub_type: str = field(metadata={'path_param': { 'field_name': 'subType', 'style': 'simple', 'explode': False }})
    
class EntryTypesAPIGetMappedTagFieldsEnum(str, Enum):
    NONE = "None"
    ADDITIONAL_NAMES = "AdditionalNames"
    ALIASED_TO = "AliasedTo"
    DESCRIPTION = "Description"
    MAIN_PICTURE = "MainPicture"
    NAMES = "Names"
    PARENT = "Parent"
    RELATED_TAGS = "RelatedTags"
    TRANSLATED_DESCRIPTION = "TranslatedDescription"
    WEB_LINKS = "WebLinks"


@dataclass
class EntryTypesAPIGetMappedTagQueryParams:
    fields: Optional[EntryTypesAPIGetMappedTagFieldsEnum] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    

@dataclass
class EntryTypesAPIGetMappedTagRequest:
    path_params: EntryTypesAPIGetMappedTagPathParams = field()
    query_params: EntryTypesAPIGetMappedTagQueryParams = field()
    

@dataclass
class EntryTypesAPIGetMappedTagResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    tag_for_api_contract: Optional[shared.TagForAPIContract] = field(default=None)
    
