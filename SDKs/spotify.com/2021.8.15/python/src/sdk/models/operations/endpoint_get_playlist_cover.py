from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class EndpointGetPlaylistCoverPathParams:
    playlist_id: str = field(metadata={'path_param': { 'field_name': 'playlist_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class EndpointGetPlaylistCoverHeaders:
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class EndpointGetPlaylistCoverSecurity:
    spotify_auth: shared.SchemeSpotifyAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class EndpointGetPlaylistCoverRequest:
    headers: EndpointGetPlaylistCoverHeaders = field()
    path_params: EndpointGetPlaylistCoverPathParams = field()
    security: EndpointGetPlaylistCoverSecurity = field()
    

@dataclass
class EndpointGetPlaylistCoverResponse:
    content_type: str = field()
    status_code: int = field()
    error_response_object: Optional[shared.ErrorResponseObject] = field(default=None)
    image_objects: Optional[List[shared.ImageObject]] = field(default=None)
    
