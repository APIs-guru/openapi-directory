from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared

class SongAPIGetHighlightedSongsFieldsEnum(str, Enum):
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

class SongAPIGetHighlightedSongsLanguagePreferenceEnum(str, Enum):
    DEFAULT = "Default"
    JAPANESE = "Japanese"
    ROMAJI = "Romaji"
    ENGLISH = "English"


@dataclass
class SongAPIGetHighlightedSongsQueryParams:
    fields: Optional[SongAPIGetHighlightedSongsFieldsEnum] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    language_preference: Optional[SongAPIGetHighlightedSongsLanguagePreferenceEnum] = field(default=None, metadata={'query_param': { 'field_name': 'languagePreference', 'style': 'form', 'explode': True }})
    

@dataclass
class SongAPIGetHighlightedSongsRequest:
    query_params: SongAPIGetHighlightedSongsQueryParams = field(default=None)
    

@dataclass
class SongAPIGetHighlightedSongsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    song_for_api_contracts: Optional[List[shared.SongForAPIContract]] = field(default=None)
    status_code: int = field(default=None)
    
