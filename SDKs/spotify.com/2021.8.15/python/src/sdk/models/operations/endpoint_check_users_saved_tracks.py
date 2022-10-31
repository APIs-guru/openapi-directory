from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class EndpointCheckUsersSavedTracksQueryParams:
    ids: str = field(default=None, metadata={'query_param': { 'field_name': 'ids', 'style': 'form', 'explode': True }})
    

@dataclass
class EndpointCheckUsersSavedTracksHeaders:
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class EndpointCheckUsersSavedTracksSecurity:
    spotify_auth: shared.SchemeSpotifyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class EndpointCheckUsersSavedTracksRequest:
    query_params: EndpointCheckUsersSavedTracksQueryParams = field(default=None)
    headers: EndpointCheckUsersSavedTracksHeaders = field(default=None)
    security: EndpointCheckUsersSavedTracksSecurity = field(default=None)
    

@dataclass
class EndpointCheckUsersSavedTracksResponse:
    content_type: str = field(default=None)
    error_response_object: Optional[shared.ErrorResponseObject] = field(default=None)
    status_code: int = field(default=None)
    endpoint_check_users_saved_tracks_200_application_json_booleans: Optional[List[bool]] = field(default=None)
    
