from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAPIUsersCurrentFollowedArtistsArtistIDPathParams:
    artist_id: int = field(metadata={'path_param': { 'field_name': 'artistId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPIUsersCurrentFollowedArtistsArtistIDRequest:
    path_params: GetAPIUsersCurrentFollowedArtistsArtistIDPathParams = field()
    

@dataclass
class GetAPIUsersCurrentFollowedArtistsArtistIDResponse:
    content_type: str = field()
    status_code: int = field()
    artist_for_user_for_api_contract: Optional[shared.ArtistForUserForAPIContract] = field(default=None)
    body: Optional[bytes] = field(default=None)
    
