from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class EndpointCheckIfUserFollowsPlaylistPathParams:
    playlist_id: str = field(metadata={'path_param': { 'field_name': 'playlist_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class EndpointCheckIfUserFollowsPlaylistQueryParams:
    ids: str = field(metadata={'query_param': { 'field_name': 'ids', 'style': 'form', 'explode': True }})
    

@dataclass
class EndpointCheckIfUserFollowsPlaylistHeaders:
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class EndpointCheckIfUserFollowsPlaylistSecurity:
    spotify_auth: shared.SchemeSpotifyAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class EndpointCheckIfUserFollowsPlaylistRequest:
    headers: EndpointCheckIfUserFollowsPlaylistHeaders = field()
    path_params: EndpointCheckIfUserFollowsPlaylistPathParams = field()
    query_params: EndpointCheckIfUserFollowsPlaylistQueryParams = field()
    security: EndpointCheckIfUserFollowsPlaylistSecurity = field()
    

@dataclass
class EndpointCheckIfUserFollowsPlaylistResponse:
    content_type: str = field()
    status_code: int = field()
    error_response_object: Optional[shared.ErrorResponseObject] = field(default=None)
    endpoint_check_if_user_follows_playlist_200_application_json_booleans: Optional[List[bool]] = field(default=None)
    
