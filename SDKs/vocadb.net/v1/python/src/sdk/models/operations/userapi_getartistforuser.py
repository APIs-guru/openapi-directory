from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UserAPIGetArtistForUserPathParams:
    artist_id: int = field(default=None, metadata={'path_param': { 'field_name': 'artistId', 'style': 'simple', 'explode': False }})
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UserAPIGetArtistForUserRequest:
    path_params: UserAPIGetArtistForUserPathParams = field(default=None)
    

@dataclass
class UserAPIGetArtistForUserResponse:
    artist_for_user_for_api_contract: Optional[shared.ArtistForUserForAPIContract] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
