from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class ReleaseEventAPIGetAlbumsPathParams:
    event_id: int = field(metadata={'path_param': { 'field_name': 'eventId', 'style': 'simple', 'explode': False }})
    
class ReleaseEventAPIGetAlbumsFieldsEnum(str, Enum):
    NONE = "None"
    ADDITIONAL_NAMES = "AdditionalNames"
    ARTISTS = "Artists"
    DESCRIPTION = "Description"
    DISCS = "Discs"
    IDENTIFIERS = "Identifiers"
    MAIN_PICTURE = "MainPicture"
    NAMES = "Names"
    P_VS = "PVs"
    RELEASE_EVENT = "ReleaseEvent"
    TAGS = "Tags"
    TRACKS = "Tracks"
    WEB_LINKS = "WebLinks"

class ReleaseEventAPIGetAlbumsLangEnum(str, Enum):
    DEFAULT = "Default"
    JAPANESE = "Japanese"
    ROMAJI = "Romaji"
    ENGLISH = "English"


@dataclass
class ReleaseEventAPIGetAlbumsQueryParams:
    fields: Optional[ReleaseEventAPIGetAlbumsFieldsEnum] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    lang: Optional[ReleaseEventAPIGetAlbumsLangEnum] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    

@dataclass
class ReleaseEventAPIGetAlbumsRequest:
    path_params: ReleaseEventAPIGetAlbumsPathParams = field()
    query_params: ReleaseEventAPIGetAlbumsQueryParams = field()
    

@dataclass
class ReleaseEventAPIGetAlbumsResponse:
    content_type: str = field()
    status_code: int = field()
    album_for_api_contracts: Optional[List[shared.AlbumForAPIContract]] = field(default=None)
    body: Optional[bytes] = field(default=None)
    
