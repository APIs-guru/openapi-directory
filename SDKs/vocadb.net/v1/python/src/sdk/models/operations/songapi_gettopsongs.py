from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from sdk.models import shared

class SongAPIGetTopSongsFieldsEnum(str, Enum):
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

class SongAPIGetTopSongsFilterByEnum(str, Enum):
    CREATE_DATE = "CreateDate"
    PUBLISH_DATE = "PublishDate"
    POPULARITY = "Popularity"

class SongAPIGetTopSongsLanguagePreferenceEnum(str, Enum):
    DEFAULT = "Default"
    JAPANESE = "Japanese"
    ROMAJI = "Romaji"
    ENGLISH = "English"

class SongAPIGetTopSongsVocalistEnum(str, Enum):
    NOTHING = "Nothing"
    VOCALOID = "Vocaloid"
    UTAU = "UTAU"
    OTHER = "Other"


@dataclass
class SongAPIGetTopSongsQueryParams:
    duration_hours: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'durationHours', 'style': 'form', 'explode': True }})
    fields: Optional[SongAPIGetTopSongsFieldsEnum] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    filter_by: Optional[SongAPIGetTopSongsFilterByEnum] = field(default=None, metadata={'query_param': { 'field_name': 'filterBy', 'style': 'form', 'explode': True }})
    language_preference: Optional[SongAPIGetTopSongsLanguagePreferenceEnum] = field(default=None, metadata={'query_param': { 'field_name': 'languagePreference', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    start_date: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'startDate', 'style': 'form', 'explode': True }})
    vocalist: Optional[SongAPIGetTopSongsVocalistEnum] = field(default=None, metadata={'query_param': { 'field_name': 'vocalist', 'style': 'form', 'explode': True }})
    

@dataclass
class SongAPIGetTopSongsRequest:
    query_params: SongAPIGetTopSongsQueryParams = field(default=None)
    

@dataclass
class SongAPIGetTopSongsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    song_for_api_contracts: Optional[List[shared.SongForAPIContract]] = field(default=None)
    status_code: int = field(default=None)
    
