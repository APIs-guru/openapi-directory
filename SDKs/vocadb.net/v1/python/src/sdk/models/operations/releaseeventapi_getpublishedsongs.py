from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class ReleaseEventAPIGetPublishedSongsPathParams:
    event_id: int = field(metadata={'path_param': { 'field_name': 'eventId', 'style': 'simple', 'explode': False }})
    
class ReleaseEventAPIGetPublishedSongsFieldsEnum(str, Enum):
    NONE = "None"
    ADDITIONAL_NAMES = "AdditionalNames"
    ALBUMS = "Albums"
    ARTISTS = "Artists"
    LYRICS = "Lyrics"
    MAIN_PICTURE = "MainPicture"
    NAMES = "Names"
    P_VS = "PVs"
    RELEASE_EVENT = "ReleaseEvent"
    TAGS = "Tags"
    THUMB_URL = "ThumbUrl"
    WEB_LINKS = "WebLinks"

class ReleaseEventAPIGetPublishedSongsLangEnum(str, Enum):
    DEFAULT = "Default"
    JAPANESE = "Japanese"
    ROMAJI = "Romaji"
    ENGLISH = "English"


@dataclass
class ReleaseEventAPIGetPublishedSongsQueryParams:
    fields: Optional[ReleaseEventAPIGetPublishedSongsFieldsEnum] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    lang: Optional[ReleaseEventAPIGetPublishedSongsLangEnum] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    

@dataclass
class ReleaseEventAPIGetPublishedSongsRequest:
    path_params: ReleaseEventAPIGetPublishedSongsPathParams = field()
    query_params: ReleaseEventAPIGetPublishedSongsQueryParams = field()
    

@dataclass
class ReleaseEventAPIGetPublishedSongsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    song_for_api_contracts: Optional[List[shared.SongForAPIContract]] = field(default=None)
    
