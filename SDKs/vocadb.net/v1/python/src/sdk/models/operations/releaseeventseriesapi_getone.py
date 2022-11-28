from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class ReleaseEventSeriesAPIGetOnePathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
class ReleaseEventSeriesAPIGetOneFieldsEnum(str, Enum):
    NONE = "None"
    ADDITIONAL_NAMES = "AdditionalNames"
    DESCRIPTION = "Description"
    EVENTS = "Events"
    MAIN_PICTURE = "MainPicture"
    NAMES = "Names"
    WEB_LINKS = "WebLinks"

class ReleaseEventSeriesAPIGetOneLangEnum(str, Enum):
    DEFAULT = "Default"
    JAPANESE = "Japanese"
    ROMAJI = "Romaji"
    ENGLISH = "English"


@dataclass
class ReleaseEventSeriesAPIGetOneQueryParams:
    fields: Optional[ReleaseEventSeriesAPIGetOneFieldsEnum] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    lang: Optional[ReleaseEventSeriesAPIGetOneLangEnum] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    

@dataclass
class ReleaseEventSeriesAPIGetOneRequest:
    path_params: ReleaseEventSeriesAPIGetOnePathParams = field()
    query_params: ReleaseEventSeriesAPIGetOneQueryParams = field()
    

@dataclass
class ReleaseEventSeriesAPIGetOneResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    release_event_series_for_api_contract: Optional[shared.ReleaseEventSeriesForAPIContract] = field(default=None)
    
