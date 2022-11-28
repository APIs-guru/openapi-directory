from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class AlbumAPIGetUserCollectionsPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
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
    path_params: AlbumAPIGetUserCollectionsPathParams = field()
    query_params: AlbumAPIGetUserCollectionsQueryParams = field()
    

@dataclass
class AlbumAPIGetUserCollectionsResponse:
    content_type: str = field()
    status_code: int = field()
    album_for_user_for_api_contracts: Optional[List[shared.AlbumForUserForAPIContract]] = field(default=None)
    body: Optional[bytes] = field(default=None)
    
