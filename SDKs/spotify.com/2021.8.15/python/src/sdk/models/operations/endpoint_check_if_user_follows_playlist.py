from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class EndpointCheckIfUserFollowsPlaylistPathParams:
    playlist_id: str = field(default=None, metadata={'path_param': { 'field_name': 'playlist_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class EndpointCheckIfUserFollowsPlaylistQueryParams:
    ids: str = field(default=None, metadata={'query_param': { 'field_name': 'ids', 'style': 'form', 'explode': True }})
    

@dataclass
class EndpointCheckIfUserFollowsPlaylistHeaders:
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class EndpointCheckIfUserFollowsPlaylistSecurity:
    spotify_auth: shared.SchemeSpotifyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class EndpointCheckIfUserFollowsPlaylistRequest:
    path_params: EndpointCheckIfUserFollowsPlaylistPathParams = field(default=None)
    query_params: EndpointCheckIfUserFollowsPlaylistQueryParams = field(default=None)
    headers: EndpointCheckIfUserFollowsPlaylistHeaders = field(default=None)
    security: EndpointCheckIfUserFollowsPlaylistSecurity = field(default=None)
    

@dataclass
class EndpointCheckIfUserFollowsPlaylistResponse:
    content_type: str = field(default=None)
    error_response_object: Optional[shared.ErrorResponseObject] = field(default=None)
    status_code: int = field(default=None)
    endpoint_check_if_user_follows_playlist_200_application_json_booleans: Optional[List[bool]] = field(default=None)
    
