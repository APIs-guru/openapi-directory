from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class EndpointGetPlaylistCoverPathParams:
    playlist_id: str = field(default=None, metadata={'path_param': { 'field_name': 'playlist_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class EndpointGetPlaylistCoverHeaders:
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization' }})
    

@dataclass
class EndpointGetPlaylistCoverSecurity:
    spotify_auth: shared.SchemeSpotifyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class EndpointGetPlaylistCoverRequest:
    path_params: EndpointGetPlaylistCoverPathParams = field(default=None)
    headers: EndpointGetPlaylistCoverHeaders = field(default=None)
    security: EndpointGetPlaylistCoverSecurity = field(default=None)
    

@dataclass
class EndpointGetPlaylistCoverResponse:
    content_type: str = field(default=None)
    error_response_object: Optional[shared.ErrorResponseObject] = field(default=None)
    image_objects: Optional[List[shared.ImageObject]] = field(default=None)
    status_code: int = field(default=None)
    
