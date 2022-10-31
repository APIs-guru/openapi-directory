from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class EndpointGetTheUsersCurrentlyPlayingTrackQueryParams:
    additional_types: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'additional_types', 'style': 'form', 'explode': True }})
    market: str = field(default=None, metadata={'query_param': { 'field_name': 'market', 'style': 'form', 'explode': True }})
    

@dataclass
class EndpointGetTheUsersCurrentlyPlayingTrackHeaders:
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class EndpointGetTheUsersCurrentlyPlayingTrackSecurity:
    spotify_auth: shared.SchemeSpotifyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class EndpointGetTheUsersCurrentlyPlayingTrackRequest:
    query_params: EndpointGetTheUsersCurrentlyPlayingTrackQueryParams = field(default=None)
    headers: EndpointGetTheUsersCurrentlyPlayingTrackHeaders = field(default=None)
    security: EndpointGetTheUsersCurrentlyPlayingTrackSecurity = field(default=None)
    

@dataclass
class EndpointGetTheUsersCurrentlyPlayingTrackResponse:
    content_type: str = field(default=None)
    currently_playing_object: Optional[shared.CurrentlyPlayingObject] = field(default=None)
    error_response_object: Optional[shared.ErrorResponseObject] = field(default=None)
    status_code: int = field(default=None)
    
