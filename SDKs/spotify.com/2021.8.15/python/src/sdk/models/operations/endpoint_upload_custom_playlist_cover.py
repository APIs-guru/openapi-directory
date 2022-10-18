from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class EndpointUploadCustomPlaylistCoverPathParams:
    playlist_id: str = field(default=None, metadata={'path_param': { 'field_name': 'playlist_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class EndpointUploadCustomPlaylistCoverHeaders:
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization' }})
    content_type: str = field(default=None, metadata={'header': { 'field_name': 'Content-Type' }})
    

@dataclass
class EndpointUploadCustomPlaylistCoverSecurity:
    spotify_auth: shared.SchemeSpotifyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class EndpointUploadCustomPlaylistCoverRequest:
    path_params: EndpointUploadCustomPlaylistCoverPathParams = field(default=None)
    headers: EndpointUploadCustomPlaylistCoverHeaders = field(default=None)
    request: bytes = field(default=None, metadata={'request': { 'media_type': 'image/jpeg' }})
    security: EndpointUploadCustomPlaylistCoverSecurity = field(default=None)
    

@dataclass
class EndpointUploadCustomPlaylistCoverResponse:
    content_type: str = field(default=None)
    error_response_object: Optional[shared.ErrorResponseObject] = field(default=None)
    status_code: int = field(default=None)
    
