from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class EndpointUploadCustomPlaylistCoverPathParams:
    playlist_id: str = field(metadata={'path_param': { 'field_name': 'playlist_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class EndpointUploadCustomPlaylistCoverHeaders:
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    content_type: str = field(metadata={'header': { 'field_name': 'Content-Type', 'style': 'simple', 'explode': False }})
    

@dataclass
class EndpointUploadCustomPlaylistCoverSecurity:
    spotify_auth: shared.SchemeSpotifyAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class EndpointUploadCustomPlaylistCoverRequest:
    headers: EndpointUploadCustomPlaylistCoverHeaders = field()
    path_params: EndpointUploadCustomPlaylistCoverPathParams = field()
    request: str = field(metadata={'request': { 'media_type': 'image/jpeg' }})
    security: EndpointUploadCustomPlaylistCoverSecurity = field()
    

@dataclass
class EndpointUploadCustomPlaylistCoverResponse:
    content_type: str = field()
    status_code: int = field()
    error_response_object: Optional[shared.ErrorResponseObject] = field(default=None)
    
