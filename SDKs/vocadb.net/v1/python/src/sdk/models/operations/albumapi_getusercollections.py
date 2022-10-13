from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class AlbumAPIGetUserCollectionsPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
class AlbumAPIGetUserCollectionsLanguagePreferenceEnum(str, Enum):
    DEFAULT = "Default"
    JAPANESE = "Japanese"
    ROMAJI = "Romaji"
    ENGLISH = "English"


@dataclass
class AlbumAPIGetUserCollectionsQueryParams:
    language_preference: Optional[AlbumAPIGetUserCollectionsLanguagePreferenceEnum] = field(default=None, metadata={'query_param': { 'field_name': 'languagePreference', 'style': 'form', 'explode': True }})
    

@dataclass
class AlbumAPIGetUserCollectionsRequest:
    path_params: AlbumAPIGetUserCollectionsPathParams = field(default=None)
    query_params: AlbumAPIGetUserCollectionsQueryParams = field(default=None)
    

@dataclass
class AlbumAPIGetUserCollectionsResponse:
    album_for_user_for_api_contracts: Optional[List[shared.AlbumForUserForAPIContract]] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
