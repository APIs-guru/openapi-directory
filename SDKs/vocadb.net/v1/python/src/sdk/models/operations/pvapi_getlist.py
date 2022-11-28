from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared

class PvAPIGetListLangEnum(str, Enum):
    DEFAULT = "Default"
    JAPANESE = "Japanese"
    ROMAJI = "Romaji"
    ENGLISH = "English"

class PvAPIGetListServiceEnum(str, Enum):
    NICO_NICO_DOUGA = "NicoNicoDouga"
    YOUTUBE = "Youtube"
    SOUND_CLOUD = "SoundCloud"
    VIMEO = "Vimeo"
    PIAPRO = "Piapro"
    BILIBILI = "Bilibili"
    FILE = "File"
    LOCAL_FILE = "LocalFile"
    CREOFUGA = "Creofuga"
    BANDCAMP = "Bandcamp"


@dataclass
class PvAPIGetListQueryParams:
    author: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'author', 'style': 'form', 'explode': True }})
    get_total_count: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'getTotalCount', 'style': 'form', 'explode': True }})
    lang: Optional[PvAPIGetListLangEnum] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    service: Optional[PvAPIGetListServiceEnum] = field(default=None, metadata={'query_param': { 'field_name': 'service', 'style': 'form', 'explode': True }})
    

@dataclass
class PvAPIGetListRequest:
    query_params: PvAPIGetListQueryParams = field()
    

@dataclass
class PvAPIGetListResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    partial_find_result_pv_for_song_contract_: Optional[shared.PartialFindResultPvForSongContract] = field(default=None)
    
