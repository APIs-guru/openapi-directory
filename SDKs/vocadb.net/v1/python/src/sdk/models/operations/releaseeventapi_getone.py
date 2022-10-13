from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class ReleaseEventAPIGetOnePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
class ReleaseEventAPIGetOneFieldsEnum(str, Enum):
    NONE = "None"
    ADDITIONAL_NAMES = "AdditionalNames"
    ARTISTS = "Artists"
    DESCRIPTION = "Description"
    MAIN_PICTURE = "MainPicture"
    NAMES = "Names"
    SERIES = "Series"
    SONG_LIST = "SongList"
    TAGS = "Tags"
    VENUE = "Venue"
    WEB_LINKS = "WebLinks"

class ReleaseEventAPIGetOneLangEnum(str, Enum):
    DEFAULT = "Default"
    JAPANESE = "Japanese"
    ROMAJI = "Romaji"
    ENGLISH = "English"


@dataclass
class ReleaseEventAPIGetOneQueryParams:
    fields: Optional[ReleaseEventAPIGetOneFieldsEnum] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    lang: Optional[ReleaseEventAPIGetOneLangEnum] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    

@dataclass
class ReleaseEventAPIGetOneRequest:
    path_params: ReleaseEventAPIGetOnePathParams = field(default=None)
    query_params: ReleaseEventAPIGetOneQueryParams = field(default=None)
    

@dataclass
class ReleaseEventAPIGetOneResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    release_event_for_api_contract: Optional[shared.ReleaseEventForAPIContract] = field(default=None)
    status_code: int = field(default=None)
    
