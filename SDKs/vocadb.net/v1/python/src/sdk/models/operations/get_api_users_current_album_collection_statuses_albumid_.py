from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAPIUsersCurrentAlbumCollectionStatusesAlbumIDPathParams:
    album_id: int = field(metadata={'path_param': { 'field_name': 'albumId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPIUsersCurrentAlbumCollectionStatusesAlbumIDRequest:
    path_params: GetAPIUsersCurrentAlbumCollectionStatusesAlbumIDPathParams = field()
    

@dataclass
class GetAPIUsersCurrentAlbumCollectionStatusesAlbumIDResponse:
    content_type: str = field()
    status_code: int = field()
    album_for_user_for_api_contract: Optional[shared.AlbumForUserForAPIContract] = field(default=None)
    body: Optional[bytes] = field(default=None)
    
